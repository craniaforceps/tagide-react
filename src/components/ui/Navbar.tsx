import { Link } from 'react-router'
import { useEffect, useState } from 'react'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import SereiaIcon from './icon/SereiaIcon'

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
          <label tabIndex={0} className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 hover:text-amber-500"
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
          className="md:text-4xl text-xl tracking-widest font-sans flex items-center gap-2 hover:bg-transparent hover:text-amber-500 hover:border-transparent"
        >
          {theme === 'lofi' ? <SereiaIcon /> : <SereiaIcon />}
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
        <button
          className="md:pr-6 md:p-6 md:text-xl p-2 text-xs cursor-pointer hover:text-amber-500"
          onClick={toggleTheme}
        >
          {theme === 'dracula' ? <BsSunFill /> : <BsMoonFill />}
        </button>
        <Link
          to="/login"
          className="btn p-2 text-xs md:text-base hover:text-amber-500"
        >
          Login
        </Link>
      </div>
    </div>
  )
}

export default Navbar
