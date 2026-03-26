import Heading from '../components/Heading';
import Callout from '../components/Callout';
import CodeBlock from '../components/CodeBlock';
import PropsTable from '../components/PropsTable';

export default function DesignSystem() {
  return (
    <div>
      <Heading level={1} id="design-system">ADMINCHAT Panel Design System</Heading>
      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        This guide documents the visual language and component patterns used across the
        ADMINCHAT Panel. All plugins must follow these conventions to provide a consistent
        user experience. The design system is built on CSS custom properties (variables)
        that automatically adapt to the active theme.
      </p>

      {/* ── Color Tokens ─────────────────────────────────────── */}
      <Heading level={2} id="color-tokens">Color Tokens</Heading>
      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        Colors are defined as CSS custom properties on the <span className="font-mono text-xs bg-bg-gray px-1.5 py-0.5 rounded">:root</span> element.
        Always use these variables instead of hard-coded hex values so your plugin adapts
        correctly when the Panel switches themes.
      </p>

      <Heading level={3} id="backgrounds">Backgrounds</Heading>
      <PropsTable
        columns={['CSS Variable', 'Hex (Dark)', 'Usage']}
        rows={[
          ['--bg-primary', '#0A0A0F', 'Main page background. Used on the outermost container.'],
          ['--bg-secondary', '#111118', 'Card and panel backgrounds. Primary surface color for content areas.'],
          ['--bg-tertiary', '#1A1A24', 'Nested surfaces, sidebar backgrounds, elevated cards.'],
          ['--bg-gray', '#252530', 'Subtle background highlights, code block backgrounds, input fields.'],
          ['--bg-hover', '#2A2A36', 'Hover state for interactive elements on secondary backgrounds.'],
          ['--bg-active', '#32323F', 'Active/pressed state for interactive elements.'],
        ]}
      />

      <Heading level={3} id="accent-status">Accent &amp; Status Colors</Heading>
      <PropsTable
        columns={['CSS Variable', 'Hex (Dark)', 'Usage']}
        rows={[
          ['--accent-primary', '#6C5CE7', 'Primary brand accent. Buttons, links, active states.'],
          ['--accent-primary-hover', '#7D6FF0', 'Hover state for primary accent elements.'],
          ['--accent-secondary', '#A29BFE', 'Secondary accent for softer highlights, badges, tags.'],
          ['--status-success', '#00B894', 'Success states, positive indicators, confirmed badges.'],
          ['--status-warning', '#FDCB6E', 'Warning states, caution indicators, pending badges.'],
          ['--status-error', '#FF6B6B', 'Error states, destructive actions, failure indicators.'],
          ['--status-info', '#74B9FF', 'Informational badges, neutral highlights, help text.'],
        ]}
      />

      <Heading level={3} id="text-colors">Text Colors</Heading>
      <PropsTable
        columns={['CSS Variable', 'Hex (Dark)', 'Usage']}
        rows={[
          ['--text-primary', '#FFFFFF', 'Headings, primary content, high-emphasis text.'],
          ['--text-secondary', '#A0A0B0', 'Body text, descriptions, secondary content.'],
          ['--text-tertiary', '#6B6B80', 'Placeholders, disabled text, meta information.'],
          ['--text-accent', '#6C5CE7', 'Links, interactive text, highlighted keywords.'],
          ['--text-on-accent', '#FFFFFF', 'Text rendered on accent-colored backgrounds.'],
        ]}
      />

      <Heading level={3} id="borders">Border Colors</Heading>
      <PropsTable
        columns={['CSS Variable', 'Hex (Dark)', 'Usage']}
        rows={[
          ['--border-primary', '#2A2A36', 'Default border for cards, inputs, dividers.'],
          ['--border-secondary', '#3A3A48', 'Emphasized borders, section separators, focus rings.'],
          ['--border-accent', '#6C5CE7', 'Active/focused input borders, selected card borders.'],
        ]}
      />

      <CodeBlock language="css" title="Using color tokens in CSS">
{`.my-plugin-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: 12px;
  color: var(--text-primary);
}

.my-plugin-card:hover {
  border-color: var(--border-accent);
  background: var(--bg-hover);
}

.my-plugin-badge-success {
  background: rgba(0, 184, 148, 0.15);
  color: var(--status-success);
}

.my-plugin-badge-error {
  background: rgba(255, 107, 107, 0.15);
  color: var(--status-error);
}`}
      </CodeBlock>

      {/* ── Typography ────────────────────────────────────────── */}
      <Heading level={2} id="typography">Typography</Heading>
      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        The Panel uses three font families, each serving a specific purpose.
      </p>
      <PropsTable
        columns={['Font Family', 'CSS Variable', 'Usage']}
        rows={[
          ['Space Grotesk', '--font-heading', 'Headings (h1-h4), display text, stats numbers, page titles.'],
          ['Inter', '--font-body', 'Body text, descriptions, labels, form inputs, buttons.'],
          ['JetBrains Mono', '--font-mono', 'Code blocks, inline code, API paths, technical identifiers.'],
        ]}
      />

      <CodeBlock language="css" title="Font family usage">
{`h1, h2, h3, h4 {
  font-family: var(--font-heading), sans-serif;
}

body, p, label, button {
  font-family: var(--font-body), sans-serif;
}

code, pre, .mono {
  font-family: var(--font-mono), monospace;
}`}
      </CodeBlock>

      <Heading level={3} id="font-sizes">Font Sizes</Heading>
      <PropsTable
        columns={['Token', 'Size', 'Line Height', 'Usage']}
        rows={[
          ['text-xs', '12px', '16px', 'Captions, helper text, badges, table meta.'],
          ['text-sm', '14px', '20px', 'Body text, form labels, table cells, descriptions.'],
          ['text-base', '16px', '24px', 'Primary body text (used sparingly — most body text is text-sm).'],
          ['text-lg', '18px', '28px', 'Section headings (h3, h4), card titles.'],
          ['text-xl', '20px', '28px', 'Sub-page headings (h2).'],
          ['text-2xl', '24px', '32px', 'Page headings (h1), large stats.'],
          ['text-3xl', '30px', '36px', 'Hero stats, large display numbers.'],
          ['text-4xl', '36px', '40px', 'Dashboard hero numbers, primary KPI values.'],
        ]}
      />

      <Heading level={3} id="font-weights">Font Weights</Heading>
      <PropsTable
        columns={['Weight', 'Value', 'Usage']}
        rows={[
          ['Regular', '400', 'Body text, descriptions, table cells.'],
          ['Medium', '500', 'Labels, emphasized body text, button text, table headers.'],
          ['Semibold', '600', 'Headings, card titles, stats labels, nav items.'],
          ['Bold', '700', 'Page titles, hero stats, primary emphasis.'],
        ]}
      />

      {/* ── Spacing & Layout ──────────────────────────────────── */}
      <Heading level={2} id="spacing">Spacing &amp; Layout</Heading>
      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        All spacing follows a <span className="font-medium text-text-primary">4px base grid</span>.
        Every margin, padding, and gap value should be a multiple of 4px. The most commonly
        used spacing values are:
      </p>
      <PropsTable
        columns={['Token', 'Value', 'Common Usage']}
        rows={[
          ['spacing-1', '4px', 'Tight inline spacing, icon margins.'],
          ['spacing-2', '8px', 'Compact element gaps, small padding.'],
          ['spacing-3', '12px', 'Input padding, badge padding, tight card padding.'],
          ['spacing-4', '16px', 'Standard element gaps, card padding, section spacing.'],
          ['spacing-5', '20px', 'Medium section gaps.'],
          ['spacing-6', '24px', 'Card body padding, form group spacing.'],
          ['spacing-8', '32px', 'Large section gaps, page padding.'],
          ['spacing-10', '40px', 'Page top/bottom margins, major section separators.'],
          ['spacing-12', '48px', 'Hero section padding, large layout gaps.'],
        ]}
      />

      <Heading level={3} id="layout-conventions">Layout Conventions</Heading>
      <ul className="text-sm text-text-secondary leading-relaxed mb-4 list-disc list-inside space-y-1.5 ml-2">
        <li><span className="font-medium text-text-primary">Page padding</span> — 32px horizontal, 24px vertical on desktop. 16px on mobile.</li>
        <li><span className="font-medium text-text-primary">Card padding</span> — 24px on all sides. 16px for compact cards.</li>
        <li><span className="font-medium text-text-primary">Card border radius</span> — 12px for standard cards, 8px for nested elements, 6px for small components like badges and inputs.</li>
        <li><span className="font-medium text-text-primary">Grid gap</span> — 16px between grid items (cards, stat blocks). 24px for major sections.</li>
        <li><span className="font-medium text-text-primary">Max content width</span> — 1200px for full-width layouts. Content is centered with auto margins.</li>
        <li><span className="font-medium text-text-primary">Sidebar width</span> — 260px collapsed to 64px on mobile.</li>
      </ul>

      <CodeBlock language="css" title="Layout example">
{`.my-plugin-layout {
  display: flex;
  flex-direction: column;
  gap: 24px;            /* spacing-6 */
  padding: 32px;        /* spacing-8 */
  max-width: 1200px;
  margin: 0 auto;
}

.my-plugin-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;            /* spacing-4 */
}

.my-plugin-card {
  padding: 24px;        /* spacing-6 */
  border-radius: 12px;
  background: var(--bg-secondary);
  border: 1px solid var(--border-primary);
}`}
      </CodeBlock>

      {/* ── Component Patterns ────────────────────────────────── */}
      <Heading level={2} id="component-patterns">Component Patterns</Heading>
      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        The following patterns are used throughout the Panel. Follow these conventions
        so your plugin feels native to the experience.
      </p>

      <Heading level={3} id="stats-card">Stats Card</Heading>
      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        Used for displaying key metrics. Features a label, a large numeric value, and
        an optional trend indicator.
      </p>
      <CodeBlock language="tsx" title="Stats card pattern">
{`function StatsCard({ label, value, trend, trendLabel }) {
  return (
    <div className="bg-bg-secondary border border-border-primary rounded-xl p-6">
      <p className="text-xs text-text-tertiary font-medium uppercase tracking-wider mb-2">
        {label}
      </p>
      <p className="text-3xl font-bold text-text-primary font-heading">
        {value}
      </p>
      {trend && (
        <p className={\`text-xs mt-2 \${
          trend > 0 ? 'text-status-success' : 'text-status-error'
        }\`}>
          {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}% {trendLabel}
        </p>
      )}
    </div>
  );
}`}
      </CodeBlock>

      <Heading level={3} id="tab-nav">Tab Navigation</Heading>
      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        Horizontal tabs used for switching between views within a page. The active tab
        has a bottom accent border.
      </p>
      <CodeBlock language="tsx" title="Tab navigation pattern">
{`function TabNav({ tabs, activeTab, onChange }) {
  return (
    <div className="flex gap-1 border-b border-border-primary mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={\`px-4 py-2.5 text-sm font-medium transition-colors
            \${activeTab === tab.id
              ? 'text-accent-primary border-b-2 border-accent-primary'
              : 'text-text-tertiary hover:text-text-secondary'
            }\`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}`}
      </CodeBlock>

      <Heading level={3} id="data-table">Data Table</Heading>
      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        Tables use subtle row borders and no outer border. Header text is uppercase,
        small, and uses tertiary color. Rows highlight on hover.
      </p>
      <CodeBlock language="css" title="Data table styles">
{`.acp-table {
  width: 100%;
  border-collapse: collapse;
}

.acp-table thead th {
  text-align: left;
  padding: 12px 16px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-tertiary);
  border-bottom: 1px solid var(--border-primary);
}

.acp-table tbody td {
  padding: 12px 16px;
  font-size: 14px;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border-primary);
}

.acp-table tbody tr:hover {
  background: var(--bg-hover);
}

.acp-table tbody tr:last-child td {
  border-bottom: none;
}`}
      </CodeBlock>

      <Heading level={3} id="status-badges">Status Badges</Heading>
      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        Small, pill-shaped labels that indicate state. Use a translucent background with
        matching text color.
      </p>
      <CodeBlock language="tsx" title="Status badge pattern">
{`const badgeStyles = {
  success: 'bg-[rgba(0,184,148,0.15)] text-status-success',
  warning: 'bg-[rgba(253,203,110,0.15)] text-status-warning',
  error:   'bg-[rgba(255,107,107,0.15)] text-status-error',
  info:    'bg-[rgba(116,185,255,0.15)] text-status-info',
  neutral: 'bg-bg-gray text-text-tertiary',
};

function Badge({ variant = 'neutral', children }) {
  return (
    <span className={\`inline-flex items-center px-2.5 py-0.5
      rounded-full text-xs font-medium \${badgeStyles[variant]}\`}>
      {children}
    </span>
  );
}`}
      </CodeBlock>

      <Heading level={3} id="form-inputs">Form Inputs</Heading>
      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        Inputs have a dark background, subtle border, and accent border on focus. Labels
        are placed above inputs with consistent spacing.
      </p>
      <CodeBlock language="css" title="Form input styles">
{`.acp-input {
  width: 100%;
  padding: 10px 14px;
  font-size: 14px;
  font-family: var(--font-body), sans-serif;
  color: var(--text-primary);
  background: var(--bg-gray);
  border: 1px solid var(--border-primary);
  border-radius: 8px;
  outline: none;
  transition: border-color 0.15s ease;
}

.acp-input:focus {
  border-color: var(--border-accent);
  box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.15);
}

.acp-input::placeholder {
  color: var(--text-tertiary);
}

.acp-input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.acp-label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 6px;
}`}
      </CodeBlock>

      <Heading level={3} id="buttons">Buttons</Heading>
      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        Three button variants: primary (accent fill), secondary (outlined), and ghost
        (text only). All use the Inter font with medium weight.
      </p>
      <CodeBlock language="css" title="Button styles">
{`/* Primary button */
.acp-btn-primary {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-on-accent);
  background: var(--accent-primary);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.15s ease;
}
.acp-btn-primary:hover { background: var(--accent-primary-hover); }
.acp-btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }

/* Secondary button */
.acp-btn-secondary {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
  background: transparent;
  border: 1px solid var(--border-primary);
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.15s ease, background 0.15s ease;
}
.acp-btn-secondary:hover {
  border-color: var(--border-secondary);
  background: var(--bg-hover);
}

/* Ghost button */
.acp-btn-ghost {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  background: transparent;
  border: none;
  cursor: pointer;
}
.acp-btn-ghost:hover { color: var(--text-primary); }`}
      </CodeBlock>

      <Heading level={3} id="empty-states">Empty States</Heading>
      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        When a list or table has no data, display a centered empty state with an icon,
        a title, a description, and an optional action button.
      </p>
      <CodeBlock language="tsx" title="Empty state pattern">
{`function EmptyState({ icon, title, description, action }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="text-4xl mb-4 text-text-tertiary">{icon}</div>
      <h3 className="text-lg font-semibold text-text-primary mb-2">
        {title}
      </h3>
      <p className="text-sm text-text-tertiary max-w-sm mb-6">
        {description}
      </p>
      {action && (
        <button className="acp-btn-primary">{action}</button>
      )}
    </div>
  );
}

// Usage
<EmptyState
  icon="📦"
  title="No orders yet"
  description="When customers place orders, they will appear here."
  action="Create First Order"
/>`}
      </CodeBlock>

      <Heading level={3} id="loading-states">Loading States</Heading>
      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        Use skeleton loaders for initial data fetching and spinners for actions in progress.
        Never show a blank white or black screen while loading.
      </p>
      <CodeBlock language="tsx" title="Loading patterns">
{`// Skeleton loader for cards
function SkeletonCard() {
  return (
    <div className="bg-bg-secondary border border-border-primary
                    rounded-xl p-6 animate-pulse">
      <div className="h-3 w-24 bg-bg-gray rounded mb-3" />
      <div className="h-8 w-32 bg-bg-gray rounded mb-2" />
      <div className="h-3 w-16 bg-bg-gray rounded" />
    </div>
  );
}

// Inline spinner for buttons
function Spinner({ size = 16 }) {
  return (
    <svg
      className="animate-spin"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle
        cx="12" cy="12" r="10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="60"
        strokeDashoffset="15"
      />
    </svg>
  );
}`}
      </CodeBlock>

      <Heading level={3} id="cards">Cards</Heading>
      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        Cards are the primary surface for grouping content. They use{' '}
        <span className="font-mono text-xs bg-bg-gray px-1.5 py-0.5 rounded">bg-secondary</span> with
        a single-pixel border and 12px radius. Interactive cards get a hover border color change.
      </p>
      <CodeBlock language="css" title="Card styles">
{`.acp-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: 12px;
  padding: 24px;
}

.acp-card-interactive {
  cursor: pointer;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.acp-card-interactive:hover {
  border-color: var(--border-accent);
  box-shadow: 0 0 0 1px var(--border-accent);
}`}
      </CodeBlock>

      <Heading level={3} id="modals">Modals</Heading>
      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        Modals use a semi-transparent backdrop and a centered dialog card. They should
        include a title, content area, and a footer with action buttons.
      </p>
      <CodeBlock language="css" title="Modal styles">
{`.acp-modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
}

.acp-modal {
  background: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: 16px;
  padding: 0;
  width: 100%;
  max-width: 480px;
  max-height: 85vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.acp-modal-header {
  padding: 20px 24px;
  border-bottom: 1px solid var(--border-primary);
}

.acp-modal-body {
  padding: 24px;
  overflow-y: auto;
}

.acp-modal-footer {
  padding: 16px 24px;
  border-top: 1px solid var(--border-primary);
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}`}
      </CodeBlock>

      <Heading level={3} id="toasts">Toasts</Heading>
      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        Toast notifications appear in the bottom-right corner. They auto-dismiss after 5
        seconds and can be manually dismissed. Use the Panel's built-in toast API.
      </p>
      <CodeBlock language="typescript" title="Toast usage">
{`import { useToast } from '@acp/plugin-sdk';

function Actions() {
  const toast = useToast();

  const handleSave = async () => {
    try {
      await saveData();
      toast.success('Settings saved successfully');
    } catch (err) {
      toast.error('Failed to save settings');
    }
  };

  return (
    <div>
      <button onClick={handleSave}>Save</button>
      <button onClick={() => toast.info('Processing...')}>Process</button>
      <button onClick={() => toast.warning('This action cannot be undone')}>
        Delete
      </button>
    </div>
  );
}`}
      </CodeBlock>

      {/* ── Do's and Don'ts ───────────────────────────────────── */}
      <Heading level={2} id="dos-and-donts">{"Do's and Don'ts"}</Heading>

      <Heading level={3} id="dos">Do</Heading>
      <ul className="text-sm text-text-secondary leading-relaxed mb-4 list-disc list-inside space-y-1.5 ml-2">
        <li><span className="font-medium text-status-success">Do</span> use CSS custom properties for all colors, fonts, and spacing.</li>
        <li><span className="font-medium text-status-success">Do</span> follow the 4px spacing grid for all layout values.</li>
        <li><span className="font-medium text-status-success">Do</span> use <span className="font-mono text-xs">text-sm (14px)</span> as the default body text size.</li>
        <li><span className="font-medium text-status-success">Do</span> provide loading skeletons while data is being fetched.</li>
        <li><span className="font-medium text-status-success">Do</span> provide empty states when lists or tables have no data.</li>
        <li><span className="font-medium text-status-success">Do</span> use 12px border radius for cards, 8px for nested elements, 6px for small components.</li>
        <li><span className="font-medium text-status-success">Do</span> use translucent backgrounds for status badges (15% opacity of the status color).</li>
        <li><span className="font-medium text-status-success">Do</span> keep button text concise and use action verbs ("Save", "Delete", "Export").</li>
        <li><span className="font-medium text-status-success">Do</span> test your plugin in both light and dark themes.</li>
      </ul>

      <Heading level={3} id="donts">{"Don't"}</Heading>
      <ul className="text-sm text-text-secondary leading-relaxed mb-4 list-disc list-inside space-y-1.5 ml-2">
        <li><span className="font-medium text-status-error">{"Don't"}</span> use hard-coded hex colors. Always reference CSS variables.</li>
        <li><span className="font-medium text-status-error">{"Don't"}</span> use custom fonts outside the three approved families (Space Grotesk, Inter, JetBrains Mono).</li>
        <li><span className="font-medium text-status-error">{"Don't"}</span> use spacing values that are not multiples of 4px.</li>
        <li><span className="font-medium text-status-error">{"Don't"}</span> add outer drop shadows to cards (the Panel uses flat design with borders).</li>
        <li><span className="font-medium text-status-error">{"Don't"}</span> override the Panel's global CSS or inject styles that affect elements outside your plugin container.</li>
        <li><span className="font-medium text-status-error">{"Don't"}</span> use bright, saturated backgrounds for large surfaces. Keep backgrounds dark and subtle.</li>
        <li><span className="font-medium text-status-error">{"Don't"}</span> show raw error messages or stack traces to end users.</li>
        <li><span className="font-medium text-status-error">{"Don't"}</span> use alert() or confirm() dialogs. Use the Panel's modal and toast patterns.</li>
        <li><span className="font-medium text-status-error">{"Don't"}</span> create custom scrollbar styles. The Panel provides consistent scrollbar styling.</li>
      </ul>

      {/* ── Accessibility ─────────────────────────────────────── */}
      <Heading level={2} id="accessibility">Accessibility Guidelines</Heading>
      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        All plugins should follow WCAG 2.1 Level AA standards. The Panel's design system
        is built with accessibility in mind, and your plugin should extend that commitment.
      </p>
      <ul className="text-sm text-text-secondary leading-relaxed mb-4 list-disc list-inside space-y-1.5 ml-2">
        <li>
          <span className="font-medium text-text-primary">Color contrast</span> — All text
          must meet a minimum 4.5:1 contrast ratio against its background. The design tokens
          are pre-validated, so use them consistently.
        </li>
        <li>
          <span className="font-medium text-text-primary">Keyboard navigation</span> — All
          interactive elements must be reachable and operable via keyboard. Use native HTML
          elements (<span className="font-mono text-xs">button</span>,{' '}
          <span className="font-mono text-xs">a</span>,{' '}
          <span className="font-mono text-xs">input</span>) wherever possible.
        </li>
        <li>
          <span className="font-medium text-text-primary">Focus indicators</span> — Never
          remove the focus outline. The Panel provides a consistent focus ring style via{' '}
          <span className="font-mono text-xs bg-bg-gray px-1.5 py-0.5 rounded">--border-accent</span>.
        </li>
        <li>
          <span className="font-medium text-text-primary">ARIA labels</span> — Add{' '}
          <span className="font-mono text-xs">aria-label</span> to icon-only buttons and
          non-text interactive elements. Use{' '}
          <span className="font-mono text-xs">aria-live="polite"</span> for dynamically
          updated content regions.
        </li>
        <li>
          <span className="font-medium text-text-primary">Color is not the only indicator</span> — Do
          not rely solely on color to convey information. Pair status colors with icons or
          text labels (for example, a green badge with a checkmark icon and "Active" text).
        </li>
        <li>
          <span className="font-medium text-text-primary">Reduced motion</span> — Respect the{' '}
          <span className="font-mono text-xs">prefers-reduced-motion</span> media query. Wrap
          animations in a check and provide static alternatives.
        </li>
        <li>
          <span className="font-medium text-text-primary">Semantic HTML</span> — Use proper
          heading hierarchy (h1 &rarr; h2 &rarr; h3). Use{' '}
          <span className="font-mono text-xs">nav</span>,{' '}
          <span className="font-mono text-xs">main</span>,{' '}
          <span className="font-mono text-xs">section</span>, and{' '}
          <span className="font-mono text-xs">aside</span> landmarks appropriately.
        </li>
      </ul>

      <CodeBlock language="css" title="Reduced motion support">
{`@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`}
      </CodeBlock>

      {/* ── Dark Theme ────────────────────────────────────────── */}
      <Heading level={2} id="dark-theme">Dark Theme Notes</Heading>
      <p className="text-sm text-text-secondary leading-relaxed mb-4">
        The ADMINCHAT Panel ships with a dark theme as the default. A light theme is available
        but the dark theme is used by the vast majority of administrators. Design and test
        your plugin in dark mode first, then verify it works in light mode.
      </p>
      <ul className="text-sm text-text-secondary leading-relaxed mb-4 list-disc list-inside space-y-1.5 ml-2">
        <li>
          <span className="font-medium text-text-primary">CSS variables handle theming</span> — All
          the color tokens documented above automatically switch values when the theme changes.
          If you use the variables consistently, your plugin will theme correctly with zero
          additional work.
        </li>
        <li>
          <span className="font-medium text-text-primary">Image considerations</span> — Avoid
          images with hard white backgrounds. Use PNGs with transparency or SVGs that reference
          CSS variables for stroke and fill colors.
        </li>
        <li>
          <span className="font-medium text-text-primary">Shadows</span> — The dark theme
          relies on borders rather than shadows for elevation. If you must use shadows, keep
          them very subtle (for example, <span className="font-mono text-xs">0 2px 8px rgba(0,0,0,0.3)</span>).
        </li>
        <li>
          <span className="font-medium text-text-primary">Testing</span> — Use the theme
          toggle in Panel Settings &rarr; Appearance to switch between dark and light themes
          during development. The <span className="font-mono text-xs">acp dev</span> server
          proxies theme settings from the connected Panel.
        </li>
      </ul>

      <Callout type="warning" title="Hard-coded colors break theming">
        If you hard-code a dark background color like <span className="font-mono text-xs">#111118</span> instead
        of using <span className="font-mono text-xs">var(--bg-secondary)</span>, your plugin will
        look broken in light mode. Always use the CSS custom properties to ensure correct
        theming behavior.
      </Callout>

      <Callout type="info" title="Design system updates">
        The design system evolves with the Panel. Subscribe to the{' '}
        <span className="font-mono text-xs">@acp/plugin-sdk</span> changelog to stay informed
        about new tokens, deprecated variables, and component pattern changes. Breaking
        changes to design tokens follow semver and are announced at least one minor version
        in advance.
      </Callout>
    </div>
  );
}