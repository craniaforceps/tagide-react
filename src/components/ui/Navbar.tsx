import { NavLink } from 'react-router'
import { useEffect, useState } from 'react'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import SereiaIcon from './icon/SereiaIcon'
import NavLinks from './NavLinks'

const Navbar = () => {
  //Estado do tema
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'lofi'
  })

  //Aplicação do tema no load
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  //Toggle do tema
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dracula' ? 'lofi' : 'dracula'))
  }

  return (
    <div className="navbar  mx-auto bg-base-200 py-2 md:px-10 lg:px-20 w-full ">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-base"
          >
            <NavLinks />
          </ul>
        </div>

        <NavLink
          to="/"
          className="md:text-4xl text-xl tracking-widest font-sans flex items-center gap-2 hover:bg-transparent hover:text-amber-500 hover:border-transparent"
        >
          <SereiaIcon className="w-5 h-5 md:w-10 md:h-10" />
          tágide
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 tracking-wider">
          <NavLinks />
        </ul>
      </div>

      <div className="navbar-end">
        <button
          className="md:pr-6 md:p-6 md:text-xl p-2 text-xs cursor-pointer hover:text-amber-500"
          onClick={toggleTheme}
        >
          {theme === 'dracula' ? <BsSunFill /> : <BsMoonFill />}
        </button>
        <NavLink
          to="/login"
          className="btn p-2 text-xs md:text-base hover:text-amber-500"
        >
          Login
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
