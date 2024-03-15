import React, { useState } from 'react';
import firebase, { auth } from '../firebase/auth';


const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUpWithEmail = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignUp = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSignUpWithEmail}>Sign Up with Email/Password</button>
      <button onClick={handleGoogleSignUp}>Sign Up with Google</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignUpScreen;
