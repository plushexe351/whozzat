import React, { useEffect } from "react";
import { Navigate } from "react-router";
import { useAuth } from "../Context/AuthContext";
import { useToast } from "../Context/ToastContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { addToast } = useToast();
  // useEffect(() => {
  //   if (!user && !loading) {
  //     addToast("You must log in");
  //   }
  // }, []);

  if (loading) return null; // or a loader
  return user ? children : <Navigate to="/auth" replace />;
};

export default PrivateRoute;
