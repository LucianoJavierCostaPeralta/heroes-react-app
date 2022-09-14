import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();

  const onLogout = () => navigate('/login')

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-2">
      <Link className="navbar-brand logo" to="/">
        <img src="https://w.wallhaven.cc/full/w8/wallhaven-w8ply6.jpg" alt="Logo" className="rounded-circle" />
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink className={({ isActive }) => `navbar-item nav-link ${isActive ? 'active' : ''}`} to="/marvel">
            Marvel
          </NavLink>

          <NavLink className={({ isActive }) => `navbar-item nav-link ${isActive ? 'active' : ''}`} to="/dc">
            Dc
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 justify-content-end">
        <div className="navbar-nav ml-auto d-flex">
          <span className="nav-link text-info">
            <i className="bi bi-person-circle "></i>
          </span>
          <button className="nav-item nav-link btn" onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}
