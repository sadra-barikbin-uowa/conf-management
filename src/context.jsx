import { createContext, useCallback, useContext, useEffect, useState } from 'react'

const read = (k, fallback) => { try { return localStorage.getItem(k) || fallback } catch { return fallback } }
const write = (k, v) => { try { localStorage.setItem(k, v) } catch { /* storage blocked */ } }

const PrefsContext = createContext(null)

export function PrefsProvider({ children }) {
  const [lang, setLang] = useState(() => read('conf-lang', 'ar'))
  const [theme, setTheme] = useState(() => read('conf-theme',
    window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))

  useEffect(() => {
    const html = document.documentElement
    html.lang = lang
    html.dir = lang === 'ar' ? 'rtl' : 'ltr'
    write('conf-lang', lang)
  }, [lang])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    write('conf-theme', theme)
  }, [theme])

  const toggleLang = useCallback(() => setLang(l => (l === 'ar' ? 'en' : 'ar')), [])
  const toggleTheme = useCallback(() => setTheme(t => (t === 'dark' ? 'light' : 'dark')), [])
  // t() picks the current language from a { ar, en } pair
  const t = useCallback(v => (v && typeof v === 'object' ? v[lang] ?? v.ar : v), [lang])

  return (
    <PrefsContext.Provider value={{ lang, theme, toggleLang, toggleTheme, t, rtl: lang === 'ar' }}>
      {children}
    </PrefsContext.Provider>
  )
}

export const usePrefs = () => useContext(PrefsContext)
