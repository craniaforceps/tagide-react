import { Link } from 'react-router'
import { useEffect, useState } from 'react'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'

import sereiaBlack from '../../assets/sereia-black.svg'
import sereiaWhite from '../../assets/sereia-white.svg'

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'lofi'
  })

  // Aplica o tema no load
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dracula' ? 'lofi' : 'dracula'))
  }

  return (
    <div className="navbar bg-base-100 shadow-lg max-w-6xl mx-auto px-4 py-8 w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-md"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/museu">Museu</Link>
            </li>
            <li>
              <Link to="/arquivo">Arquivo</Link>
            </li>
            <li>
              <Link to="/oficina">Oficina</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/testes">Testes</Link>
            </li>
          </ul>
        </div>

        <Link
          to="/"
          className="btn btn-ghost text-4xl tracking-widest font-sans flex items-center gap-2"
        >
          {theme === 'lofi' ? (
            <img src={sereiaBlack} alt="Logo" className="w-10 h-10" />
          ) : (
            <img src={sereiaWhite} alt="Logo" className="w-10 h-10" />
          )}
          tágide
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 tracking-wider text-md">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/museu">Museu</Link>
          </li>
          <li>
            <Link to="/arquivo">Arquivo</Link>
          </li>
          <li>
            <Link to="/oficina">Oficina</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/testes">Testes</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <button className="pr-6 cursor-pointer" onClick={toggleTheme}>
          {theme === 'dracula' ? <BsSunFill /> : <BsMoonFill />}
        </button>
        <Link to="/login" className="btn">
          Login
        </Link>
      </div>
    </div>
  )
}

export default Navbar
