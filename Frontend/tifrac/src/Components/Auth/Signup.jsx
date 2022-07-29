import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import styles from "./Login.module.css";
import axios from "axios";
import { Authcontext } from "../Context Api/Authcontext";
const Signup = () => {
  const { signup, setMailid, setpassword, loginhandler } =
    useContext(Authcontext);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const closeButton = () => {
    navigate("/");
  };
  const handleCallbackRsponse = (response) => {
    const userobj = jwt_decode(response.credential);
    setUser(userobj);
    document.getElementById("signInDiv").hidden = true;
    loginhandler(userobj.email);
  };
  const handelsubmit = (e) => {
    e.preventDefault();
    signup();
  };
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "63948009420-m19eji2a0tlmo9kocr7m092r0ns1gd7d.apps.googleusercontent.com",
      callback: handleCallbackRsponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "filled_blue",
      size: "large",
      shape: "circle",
      text: "continue_with",
    });

    google.accounts.id.disableAutoSelect();
    google.accounts.id.prompt();
  }, []);

  return (
    <div className={styles.login_container}>
      <div>
        <button onClick={() => closeButton()}>X</button>
      </div>
      <div className={styles.icon}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyc_wMXS_hHkfJynXufjZ3DSgNu7B8Ob0A8wWROuHTPzM2o6Q8Z1PPnqBSDNRk64AqNkc&usqp=CAU"
          alt=""
        />
      </div>
      <div className={styles.container_input}>
        <form onSubmit={handelsubmit}>
          <input
            type="text"
            placeholder="Enter your mail id"
            onChange={(e) => setMailid(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <button className={styles.actionbutton} type="submit">
            Signup
          </button>
        </form>
        <h4>- or -</h4>
        <div className={styles.signInDiv} id="signInDiv"></div>
      </div>
    </div>
  );
};

export default Signup;
