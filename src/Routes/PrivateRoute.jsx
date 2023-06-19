import React, { useContext } from 'react'
import { AuthContext } from '../components/AuthContextProvier';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
  const {isAuth, Login, Logout} = useContext(AuthContext);
  
  if(!isAuth){
    return <Navigate to="/" replace={false} />
  }

  return children;
}

export default PrivateRoute
