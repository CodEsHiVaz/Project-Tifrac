import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import styles from "./Login.module.css";
const Login = () => {
  const navigate = useNavigate();
  const closeButton = () => {
    navigate("/");
  };
  const [user, setUser] = useState({});
  const handleCallbackRsponse = (response) => {
    const userobj = jwt_decode(response.credential);
    console.log("userobj", response);
    setUser(userobj);
    document.getElementById("signInDiv").hidden = true;

    localStorage.setItem("userofHack", JSON.stringify(userobj || {}));

    navigate("/");
  };
  const signout = () => {
    google.accounts.id.disableAutoSelect();

    setUser({});
    localStorage.setItem("userofHack", JSON.stringify({ key: "" }));
    navigate("/");
  };
  useEffect(() => {
    let localdata = JSON.parse(localStorage.getItem("userofHack"));
    console.log(`🚀 ~ useEffect ~ localdata`, localdata);
    // console.log(localdata);
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
        <input type="text" placeholder="Enter your mail id" />
        <input type="password" placeholder="Enter your password" />
        <h4>or</h4>
        <div id="signInDiv"></div>
        <button onClick={signout}>Sign out</button>
      </div>
    </div>
  );
};

export default Login;
