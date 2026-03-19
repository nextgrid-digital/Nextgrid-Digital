import { useMode } from '@/context/ModeContext'

export default function FloatingModeTab() {
  const { mode, setMode } = useMode()

  return (
    <div
      className="site-mode-tab"
      role="tablist"
      aria-label="View mode: Human or Machine"
    >
      <button
        type="button"
        role="tab"
        aria-selected={mode === 'human'}
        aria-label="View as Human (visual layout)"
        onClick={() => setMode('human')}
      >
        Human
      </button>
      <button
        type="button"
        role="tab"
        aria-selected={mode === 'machine'}
        aria-label="View as Machine (structured copy)"
        onClick={() => setMode('machine')}
      >
        Machine
      </button>
    </div>
  )
}
