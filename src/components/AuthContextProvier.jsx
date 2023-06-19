import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

const AuthContextProvier = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [userId, setUserId] = useState(null);


    const Login = (id)=>{
        setIsAuth(true)
        setUserId(id);
    }

    const Logout = ()=>{
        setIsAuth(false);
    }

  return (
    <AuthContext.Provider value={{isAuth, Login, Logout, userId}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvier
