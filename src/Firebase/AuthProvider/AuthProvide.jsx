import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext(null);

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,  } from "firebase/auth";
import app from '../Firebase';

const auth =  getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProvide = ({children}) => {
   const {user, setUser} = useState(null)

   const createUser = (email, password) =>{
   return createUserWithEmailAndPassword(auth, email, password)
   }

   const login = (email, password) =>{
    return  signInWithEmailAndPassword(auth, email, password);
   }

   const logOut  = () =>{
      signOut(auth)
   }
   
   useEffect(() =>{
       const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
         console.log('logged User')
      })
      return () =>{
       unsubscribe();  
      } 
   },[])

  

   const authInfo = {
      user,
      createUser,
      login,
      logOut,
   }
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
 };

export default AuthProvide;