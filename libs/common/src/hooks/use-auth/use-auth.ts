import { useState, useEffect } from 'react';
import { getAuth, User } from 'firebase/auth';

export function useAuth() {
  const auth = getAuth();

  const [state, setState] = useState(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    return {
      initializing: !user,
      user,
    };
  });

  const onChange = (user: User | null) => {
    setState({ initializing: false, user });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(onChange);

    return () => unsubscribe();
  }, [auth]);

  return state;
}

export default useAuth;