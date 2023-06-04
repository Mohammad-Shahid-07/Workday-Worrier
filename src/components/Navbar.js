import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

// styles & images
import './Navbar.css'
import logo from '../assets/ww.png'

export default function Navbar() {
  const { logout, isPending } = useLogout()
  const {user} = useAuthContext()
  return (
    <nav className="navbar">
   
      <ul>
        <li className="logo">
          <img src={logo} alt="dojo logo" />
      
        </li>
      
      {!user && <li><Link to="/login">Login</Link></li>   }
      {!user && <li><Link to="/signup">Signup</Link></li> }
      {user &&  <li>
                     {!isPending && <button className="btn" onClick={logout}>Logout</button>}
                     {isPending && <button className="btn" disabled>Logging out...</button>}
                </li>  }
      </ul>
    </nav>
  )
}
