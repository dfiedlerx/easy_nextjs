'use client'
import { ReactElement, useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from 'next-themes'

const DarkModeButton = (): ReactElement | null => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      className="absolute right-4 bottom-4"
      aria-label="Dark/Light Mode"
      onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
    >
      {theme === 'dark' ? <FaMoon /> : <FaSun />}
    </button>
  )
}

export default DarkModeButton
