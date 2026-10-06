import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';

const AuthContext = createContext({
  user: null,
  loading: true,
  logout: async () => {},
  loginDemo: () => {}
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('disha_demo_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return;
    }

    try {
      const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
          setUser(firebaseUser);
        } else {
          try {
            const saved = localStorage.getItem('disha_demo_user');
            setUser(saved ? JSON.parse(saved) : null);
          } catch {
            setUser(null);
          }
        }
        setLoading(false);
      });
      return unsubscribe;
    } catch {
      setLoading(false);
    }
  }, []);

  const loginDemo = (email = 'family.counselling@disha.gov.in') => {
    const demoUser = { email, displayName: 'Learner & Family (Demo)' };
    try {
      localStorage.setItem('disha_demo_user', JSON.stringify(demoUser));
    } catch (e) {
      console.warn("localStorage error:", e);
    }
    setUser(demoUser);
  };

  const logout = async () => {
    try {
      localStorage.removeItem('disha_demo_user');
    } catch (e) {
      console.warn("localStorage error:", e);
    }
    setUser(null);
    if (auth) {
      try {
        await signOut(auth);
      } catch (err) {
        console.warn("Firebase signOut error:", err);
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout, loginDemo }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
