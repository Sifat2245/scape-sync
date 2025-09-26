import { useAuth } from "@/providers/AuthProvider";
import React from "react";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="text-center p-10">Loading...</div>;
  }

  return user ? children : <Navigate to="/auth/login" replace />;
};

export default PrivateRoute;
