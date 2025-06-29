import React, { useState } from "react";
import { motion, useUnmountEffect } from "framer-motion";
import { useNavigate } from "react-router";
import "./styles/Auth.scss";
import {
  handleGoogleSignIn,
  handleEmailSignIn,
  handleSignUp,
  handleImageChange,
} from "../utils/authHandlers.js";
import { p } from "framer-motion/client";
import { Check, Image, Plus, Upload, UploadCloud } from "lucide-react";
import { useToast } from "../Context/ToastContext.jsx";
import { useAuth } from "../Context/AuthContext.jsx";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showSignUp, setShowSignUp] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [profilePreview, setProfilePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  // const [userLocal, setUserLocal] = useState(null);
  const navigate = useNavigate();
  const { addToast } = useToast();
  const { user, setUser } = useAuth();

  return (
    <div className="Auth" style={{ perspective: "400px" }}>
      <motion.div
        style={{ transformStyle: "preserve-3d" }}
        className="AuthForm"
        initial={{ opacity: 0, rotateY: 50, scale: 1.2, x: -100, y: -100 }}
        exit={{ opacity: 0, rotateY: 50, scale: 1.2, x: -100, y: -100 }}
        animate={{ opacity: 1, rotateY: 0, scale: 1, x: 0, y: 0 }}
      >
        <div className="title">Get started</div>
        <div className="description">Join today.</div>
        <div className="buttons">
          <button
            className="signinwithgoogle"
            onClick={() =>
              handleGoogleSignIn(
                setUser,
                navigate,
                setError,
                setLoading,
                addToast
              )
            }
          >
            {loading ? "Signing in..." : "Sign up with Google"}
          </button>
          <div className="separator">
            <div className="line"></div>
            <span>OR</span>
            <div className="line"></div>
          </div>
          {showSignUp ? (
            <form
              onSubmit={(e) =>
                handleSignUp(
                  e,
                  email,
                  password,
                  username,
                  profileImage,
                  setUser,
                  navigate,
                  setError,
                  setLoading,
                  addToast
                )
              }
              className="inputForm signUpForm"
              style={{ width: "100%" }}
            >
              {profilePreview && (
                <img
                  className="profileImgPreview"
                  src={profilePreview}
                  alt="Profile Preview"
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    objectFit: "cover",
                    margin: "0 auto 8px auto",
                  }}
                />
              )}
              <label htmlFor="profileImgInput" className="profileImgInputLabel">
                {profilePreview && (
                  <>
                    <p>
                      <Check stroke="green" />
                      Image Uploaded
                    </p>
                    <strong>Click to change</strong>
                  </>
                )}
                {!profilePreview && (
                  <p>
                    <Image stroke="gray" />
                    Upload Profile Image
                  </p>
                )}
              </label>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{ marginBottom: 8, width: "100%" }}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ marginBottom: 8, width: "100%" }}
              />
              <input
                type="password"
                placeholder="Create password"
                value={password}
                className="password"
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ marginBottom: 8, width: "100%" }}
              />

              <input
                id="profileImgInput"
                name="profileImgInput"
                type="file"
                accept="image/*"
                onChange={(e) =>
                  handleImageChange(e, setProfileImage, setProfilePreview)
                }
                hidden
              />

              <button
                className="createAccount"
                type="submit"
                disabled={loading}
              >
                {loading ? "Creating..." : "Create Account"}
              </button>
              <button
                type="button"
                className="signUp"
                style={{ marginTop: 8 }}
                onClick={() => setShowSignUp(false)}
              >
                Already have an account? Sign in
              </button>
            </form>
          ) : (
            <form
              onSubmit={(e) =>
                handleEmailSignIn(
                  e,
                  email,
                  password,
                  setUser,
                  navigate,
                  setError,
                  setLoading,
                  addToast
                )
              }
              className="inputForm SignInForm"
              style={{ width: "100%" }}
            >
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ marginBottom: 8, width: "100%" }}
              />
              <input
                type="password"
                placeholder="Password"
                className="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ marginBottom: 8, width: "100%" }}
              />
              <button className="createAccount" type="submit">
                {loading ? "Signing in..." : "Sign in with Email"}
              </button>
              <button
                type="button"
                className="signUp"
                style={{ marginTop: 8 }}
                onClick={() => setShowSignUp(true)}
              >
                Don't have an account? Sign up
              </button>
            </form>
          )}

          <div className="privacyDisclaimer">
            By signing up, you agree to the <a href=""> Terms of Service</a> and{" "}
            <a href="">Privacy Policy</a> including <a href="">Cookie use</a>.
          </div>
          <div className="line-break"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
