import React from 'react'
import { useGlobalContext } from './context'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function ThemeToggle() {
    const { isDarkTheme, toggleDarkTheme } = useGlobalContext();


  return (
    <section className="mt-5 d-flex justify-content-center theme-container">
        <button
        className="btn btn-info d-flex justify-center-content" 
        onClick={()=>toggleDarkTheme()}>
            {isDarkTheme? <FaSun className="toggle-icon" /> : <FaMoon className="toggle-icon"/>}
        </button>
    </section>
  )
}
