import { Navigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { isAdminUser } from '../utils/admin';

export default function ProtectedRoute({ children, message, adminOnly = false }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  // Wait for Firebase to restore the session before deciding
  if (loading) {
    return <div style={{ textAlign: 'center', padding: '80px 0' }}>Loading...</div>;
  }

  // Not signed in -> go to sign in page
  if (!user) {
    return (
      <Navigate
        to="/sign"
        state={{
          redirectMessage: message || 'Sign in to continue.',
          from: location.pathname,
        }}
        replace
      />
    );
  }

  // Signed in, but this page is admin-only and the user is not an admin
  if (adminOnly && !isAdminUser(user)) {
    return (
      <div style={{ textAlign: 'center', padding: '80px 20px' }}>
        <h2>Access denied</h2>
        <p>This page is only for administrators.</p>
        <Link to="/">Go back to Home</Link>
      </div>
    );
  }

  return children;
}