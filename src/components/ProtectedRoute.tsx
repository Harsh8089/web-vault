import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
    element: React.ReactNode;
    isAuthenticated: boolean;
}

function ProtectedRoute({ element, isAuthenticated } : ProtectedRouteProps) {
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect them to the home page if they are not authenticated
    return <Navigate to="/" state={{ from: location }} />;
  }

  return element;
}

export default ProtectedRoute;
