import { useMode } from '@/context/ModeContext'

export default function FloatingModeTab() {
  const { mode, setMode } = useMode()

  return (
    <div
      className="fixed bottom-4 right-4 z-30 flex items-center rounded-md border p-0.5 shadow-md"
      style={{
        borderColor: 'var(--border)',
        backgroundColor: 'var(--bg-card)',
        boxShadow: 'var(--shadow-md)',
      }}
      role="tablist"
      aria-label="View mode: Human or Machine"
    >
      <button
        type="button"
        role="tab"
        aria-selected={mode === 'human'}
        aria-label="View as Human (visual layout)"
        onClick={() => setMode('human')}
        className="px-3 py-2 text-sm font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
        style={{
          color: mode === 'human' ? 'var(--text)' : 'var(--text-muted)',
          backgroundColor: mode === 'human' ? 'var(--bg)' : 'transparent',
        }}
      >
        Human
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={mode === 'machine'}
        aria-label="View as Machine (structured copy)"
        onClick={() => setMode('machine')}
        className="px-3 py-2 text-sm font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
        style={{
          color: mode === 'machine' ? 'var(--text)' : 'var(--text-muted)',
          backgroundColor: mode === 'machine' ? 'var(--bg)' : 'transparent',
        }}
      >
        Machine
      </button>
    </div>
  )
}
