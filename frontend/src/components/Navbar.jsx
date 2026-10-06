import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faCaretDown, faRightFromBracket, faComments } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const { user, logout } = useAuth();
  const userName = user ? (user.displayName || user.email) : null;
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [prevLocation, setPrevLocation] = useState(location.pathname);

  if (location.pathname !== prevLocation) {
    setPrevLocation(location.pathname);
    setIsDropdownOpen(false);
  }

  const handleLogout = async () => {
    await logout();
    setIsDropdownOpen(false);
    navigate('/');
  };

  return (
    <nav className="main-navbar">
      <div className='logo'>
        <Link to='/' className="logo-brand-link">
          <span className="brand-name">Disha</span>
          <span className="brand-badge">Direction</span>
        </Link>
      </div>
      
      <div className='divert'>
        <Link to='/' className={location.pathname === '/' ? 'active-nav-link' : ''}>Home</Link>
        <Link to='/family-counselling' className={location.pathname === '/family-counselling' ? 'active-nav-link highlight-link' : 'highlight-link'}>
          <FontAwesomeIcon icon={faComments} style={{ marginRight: '6px' }} />Family AI
        </Link>
        <Link to='/outcomes' className={location.pathname === '/outcomes' ? 'active-nav-link' : ''}>Outcomes</Link>
        <Link to='/explainer' className={location.pathname === '/explainer' ? 'active-nav-link' : ''}>Explainer & ROI</Link>
        <Link to='/career' className={location.pathname === '/career' ? 'active-nav-link' : ''}>Careers</Link>
        <Link to='/admin' className={location.pathname === '/admin' ? 'active-nav-link' : ''}>Admin</Link>
        <Link to='/aboutus' className={location.pathname === '/aboutus' ? 'active-nav-link' : ''}>About Us</Link>
        <Link to='/contactus' className={location.pathname === '/contactus' ? 'active-nav-link' : ''}>Counsellor</Link>
      </div>

      <div className='sign'>
        {userName ? (
          <div className="user-profile-container">
            <button 
              className="profile-btn" 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <FontAwesomeIcon icon={faCircleUser} className="profile-icon" />
              <span className="profile-name">{userName}</span>
              <FontAwesomeIcon icon={faCaretDown} className="caret-icon" />
            </button>

            {isDropdownOpen && (
              <div className="profile-dropdown">
                <button onClick={handleLogout} className="dropdown-item logout-btn">
                  <FontAwesomeIcon icon={faRightFromBracket} /> Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to='/sign' className="in-link"><span className='in'>Sign in</span></Link>
        )}
      </div>
    </nav>
  );
}