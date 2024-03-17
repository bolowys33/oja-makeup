import { useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import app from '../firebase/auth';
import { Navigate } from 'react-router-dom';

const Protected = ({ children }) => {
  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        // Redirect to login page if the user is not authenticated
        <Navigate to="/login" />;
      }
    });

    return () => unsubscribe();
  }, []);

  return children; // Return children outside the useEffect hook
};

export default Protected;
