from __future__ import annotations

from typing import Annotated

from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.database import get_async_session
from app.models.user import MarketUser
from app.utils.security import decode_token

security_scheme = HTTPBearer(auto_error=False)


async def get_db() -> AsyncSession:
    """Yield an async database session."""
    async for session in get_async_session():
        yield session


async def get_current_user(
    credentials: Annotated[
        HTTPAuthorizationCredentials | None, Depends(security_scheme)
    ],
    db: Annotated[AsyncSession, Depends(get_db)],
) -> MarketUser:
    """Extract and validate the current user from the JWT token."""
    if credentials is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Not authenticated",
        )

    payload = decode_token(credentials.credentials)
    if payload is None or payload.get("type") != "access":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or expired token",
        )

    user_id = payload.get("sub")
    if user_id is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token payload",
        )

    result = await db.execute(
        select(MarketUser).where(MarketUser.id == int(user_id))
    )
    user = result.scalar_one_or_none()

    if user is None or not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User not found or inactive",
        )

    return user


async def get_optional_user(
    credentials: Annotated[
        HTTPAuthorizationCredentials | None, Depends(security_scheme)
    ],
    db: Annotated[AsyncSession, Depends(get_db)],
) -> MarketUser | None:
    """Optionally extract the current user. Returns None if no auth."""
    if credentials is None:
        return None
    payload = decode_token(credentials.credentials)
    if payload is None or payload.get("type") != "access":
        return None
    user_id = payload.get("sub")
    if user_id is None:
        return None
    result = await db.execute(
        select(MarketUser).where(MarketUser.id == int(user_id))
    )
    user = result.scalar_one_or_none()
    if user is None or not user.is_active:
        return None
    return user


async def require_reviewer(
    current_user: Annotated[MarketUser, Depends(get_current_user)],
) -> MarketUser:
    """Require reviewer, admin, or super_admin role."""
    if current_user.role not in ("reviewer", "admin", "super_admin"):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Reviewer access required",
        )
    return current_user


async def require_admin(
    current_user: Annotated[MarketUser, Depends(get_current_user)],
) -> MarketUser:
    """Require admin or super_admin role."""
    if current_user.role not in ("admin", "super_admin"):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Admin access required",
        )
    return current_user
