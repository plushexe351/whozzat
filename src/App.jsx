import { AuthProvider } from "./Context/AuthContext";
import { useState } from "react";
import "./Globals.css";
import { Routes, Route, useLocation, Navigate } from "react-router";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import Profile from "./Pages/Profile";
import Bookmarks from "./Pages/Bookmarks";
import Analytics from "./Pages/Analytics";
import Menubar from "./Components/Menubar/Menubar";
import Landing from "./Pages/Landing";
import PrivateRoute from "./Components/PrivateRoute";
import { ToastProvider } from "./Context/ToastContext";
import LenisWrapper from "./LenisWrapper";

function App() {
  return (
    <LenisWrapper>
      <AuthProvider>
        <ToastProvider>
          <div className="min-h-screen relative overflow-hidden">
            <Menubar />
            {/* Linen texture overlay */}
            <div className="" />
            <Routes>
              <Route path="/landing" element={<Landing />} />
              <Route path="/" element={<Navigate to="/landing" replace />} />
              <Route
                path="/home"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route
                path="/analytics"
                element={
                  <PrivateRoute>
                    <Analytics />
                  </PrivateRoute>
                }
              />
              <Route
                path="/bookmarks"
                element={
                  <PrivateRoute>
                    <Bookmarks />
                  </PrivateRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/auth" element={<Auth />} />
            </Routes>
          </div>
        </ToastProvider>
      </AuthProvider>
    </LenisWrapper>
  );
}

export default App;
