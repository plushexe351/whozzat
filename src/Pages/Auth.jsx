import React from "react";
import { motion } from "framer-motion";
import "./styles/Auth.scss";

const Auth = () => {
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
          <button className="signinwithgoogle">Sign up with Google</button>
          <button className="signinwithapple">Sign up with Apple</button>
          <div className="separator">
            <div className="line"></div>
            <span>OR</span>
            <div className="line"></div>
          </div>
          <button className="createAccount">Create account</button>
          <div className="privacyDisclaimer">
            By signing up, you agree to the <a href=""> Terms of Service</a> and{" "}
            <a href="">Privacy Policy</a> including <a href="">Cookie use</a>.
          </div>
          <div className="line-break"></div>
          <p>Already have an account ?</p>
          <button className="signIn">Sign in</button>
        </div>
      </motion.div>
    </div>
  );
};

export default Auth;
