import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";
const Auth = () => {
  const navigation = useNavigate();
  return (
    <div className={styles.auth_main}>
      <button
        className={styles.auth_buttons}
        onClick={() => navigation("/login")}
      >
        Log In
      </button>
      <button
        className={styles.auth_buttons}
        onClick={() => navigation("/signup")}
      >
        Sign Up
      </button>
    </div>
  );
};

export default Auth;
