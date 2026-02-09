import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

export type ViewMode = 'human' | 'machine'

const STORAGE_KEY = 'nextgrid-mode'

const ModeContext = createContext<{
  mode: ViewMode
  setMode: (mode: ViewMode) => void
} | null>(null)

function getInitialMode(): ViewMode {
  if (typeof document === 'undefined') return 'human'
  const stored = localStorage.getItem(STORAGE_KEY) as ViewMode | null
  if (stored === 'human' || stored === 'machine') return stored
  return 'human'
}

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ViewMode>('human')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setModeState(getInitialMode())
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || typeof document === 'undefined') return
    document.documentElement.setAttribute('data-mode', mode)
    localStorage.setItem(STORAGE_KEY, mode)
  }, [mode, mounted])

  const setMode = (m: ViewMode) => setModeState(m)

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  )
}

export function useMode() {
  const ctx = useContext(ModeContext)
  if (!ctx) throw new Error('useMode must be used within ModeProvider')
  return ctx
}
