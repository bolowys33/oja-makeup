import { useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import app from '../firebase/auth';
import { useNavigate } from 'react-router-dom';

const Protected = ({ children }) => {
  const navigate = useNavigate()
  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate(`/login`)
      }
    });

    return () => unsubscribe();
  }, []);

  return children; // Return children outside the useEffect hook
};

export default Protected;
