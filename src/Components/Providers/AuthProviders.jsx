/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import useAxiosPublic from "../../hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();


  // Create new account
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Create new account
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

//   Google sign in 
     const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
     }
  // Logout user
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Update user profile
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser){
        // get token and store client 
        const userInfo = {email: currentUser.email};
        axiosPublic.post('/jwt', userInfo)
          .then(res => {
           if(res.data.token){
             localStorage.setItem('access-token', res.data.token);
           }
          });
      }
      else{
        localStorage.removeItem('access-token');
      }

      
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const AuthInfo = {
    user,
    loading,
    createUser,
    googleSignIn,
    userLogin,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
