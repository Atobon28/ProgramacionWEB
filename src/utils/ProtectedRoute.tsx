import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { PropsWithChildren } from "react";

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const context = useAuth();

  if (!context?.user) {
    return <Navigate to="/login" />;
  }

  return children;
};