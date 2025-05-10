const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg">
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
            className="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <a
          href="/"
          className="btn btn-ghost text-4xl tracking-widest font-sans "
        >
          tágide
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 tracking-wider text-l">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Our Project</a>
          </li>
          <li>
            <a>Gallery</a>
          </li>
          <li>
            <a>Gallery</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href="/login" className="btn">
          Login
        </a>
      </div>
    </div>
  )
}

export default Navbar
