import { NavLink } from 'react-router'
export default function NavBar() {
  return (
    <nav className="NavBar">
        <ul className="menu">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/bitcoin-rates">Bitcoin Rates</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
        </ul>
    </nav>
  )
}