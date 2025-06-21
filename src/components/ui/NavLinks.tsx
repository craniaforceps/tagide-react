import { NavLink } from 'react-router'

const base = 'px-3 py-2 rounded hover:text-amber-500 transition'
const active = 'bg-base-300 text-amber-500'

export const NavLinks = () => {
  return (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? `${base} ${active}` : base)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/museu"
          className={({ isActive }) => (isActive ? `${base} ${active}` : base)}
        >
          Museu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/arquivo"
          className={({ isActive }) => (isActive ? `${base} ${active}` : base)}
        >
          Arquivo
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/oficina"
          className={({ isActive }) => (isActive ? `${base} ${active}` : base)}
        >
          Oficina
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/sobre"
          className={({ isActive }) => (isActive ? `${base} ${active}` : base)}
        >
          Sobre
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/testes"
          className={({ isActive }) => (isActive ? `${base} ${active}` : base)}
        >
          Testes
        </NavLink>
      </li>
    </>
  )
}
export default NavLinks
