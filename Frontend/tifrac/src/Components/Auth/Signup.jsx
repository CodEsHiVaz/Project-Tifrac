import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
const Signup = () => {
  const navigate = useNavigate();
  const closeButton = () => {
    navigate("/");
  };
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
      <div>
        <input type="text" placeholder="Enter your mail id" />
        <input type="password" placeholder="Enter your password" />
      </div>
    </div>
  );
};

export default Signup;
