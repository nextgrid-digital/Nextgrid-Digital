import { useMode } from '@/context/ModeContext'

export default function ModeSwitcher() {
  const { mode, setMode } = useMode()

  return (
    <div
      className="flex items-center rounded-md border p-0.5"
      style={{ borderColor: 'var(--border)' }}
      role="group"
      aria-label="View perspective"
    >
      {(['human', 'machine'] as const).map((m) => (
        <button
          key={m}
          type="button"
          onClick={() => setMode(m)}
          className="px-2 py-1 text-xs font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]"
          style={{
            color: mode === m ? 'var(--text)' : 'var(--text-muted)',
            backgroundColor: mode === m ? 'var(--bg-card)' : 'transparent',
          }}
          aria-label={m === 'human' ? 'View as human' : 'View as machine'}
          aria-pressed={mode === m}
        >
          {m === 'human' ? 'H' : 'M'}
        </button>
      ))}
    </div>
  )
}
