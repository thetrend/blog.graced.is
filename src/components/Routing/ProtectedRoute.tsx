import { FC, useContext } from 'react';
import { AuthContext } from '../Auth/AuthContext';

const ProtectedRoute: FC = () => {
  const { state, dispatch } = useContext(AuthContext);
  const { isAuthenticated, loading } = state;

  
  return (
    <>
    </>
  )
}

export default ProtectedRoute;
