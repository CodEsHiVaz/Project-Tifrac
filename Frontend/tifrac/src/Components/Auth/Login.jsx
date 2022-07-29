import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import styles from "./Login.module.css";
import axios from "axios";
const Login = () => {
  const [user, setUser] = useState({});
  const [mailid, setMailid] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const closeButton = () => {
    navigate("/");
  };
  const handleCallbackRsponse = (response) => {
    const userobj = jwt_decode(response.credential);
    console.log("userobj", response);
    setUser(userobj);
    document.getElementById("signInDiv").hidden = true;

    // localStorage.setItem("userofHack", JSON.stringify(userobj.email));

    navigate("/");
  };
  const signout = () => {
    google.accounts.id.disableAutoSelect();

    setUser({});
    // localStorage.setItem("userofHack", JSON.stringify({ key: "" }));
    navigate("/signup");
  };
  const handelsubmit = (e) => {
    e.preventDefault();
    console.log(mailid, password);
    // const userdata = { mailid, password };

    axios
      .post("http://localhost:8080/auth/login", {
        mailid: mailid,
        password: password,
      })
      .then((response) => navigate("/"))
      .catch((err) => console.log(err));
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
      shape: "rectangular",
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
            Login
          </button>
        </form>
        <h4>- or -</h4>
        <div className={styles.signInDiv} id="signInDiv"></div>
        {/* <button onClick={signout}>Sign out</button> */}
      </div>
    </div>
  );
};

export default Login;
