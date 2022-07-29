import axios from "axios";
import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const Authcontext = createContext();
export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [mailid, setMailid] = useState("");
  const [password, setpassword] = useState("");
  const [nouser, setNouser] = useState(false);
  let authkey = "";

  const navigate = useNavigate();
  const loginhandler = (res) => {
    authkey = localStorage.setItem("loggerduser", res);
    setNouser(false);
    setIsAuth(true);
    setMailid("");
    setpassword("");
    navigate("/");
  };
  const login = () => {
    axios
      .post("https://backend-for-tifrac.herokuapp.com/auth/login", {
        mailid: mailid,
        password: password,
      })
      .then((response) => {
        response.data === "user not found"
          ? setNouser(true)
          : loginhandler(response.data);
      })

      .catch((err) => console.log(err));
  };
  const signup = () => {
    axios
      .post("https://backend-for-tifrac.herokuapp.com/auth/signup", {
        mailid: mailid,
        password: password,
      })
      .then((response) => navigate("/login"))
      .catch((err) => console.log(err));
    setMailid("");
    setpassword("");
  };

  const signout = () => {
    localStorage.setItem("loggerduser", "");
    setIsAuth(false);
    navigate("/");
  };

  useEffect(() => {
    authkey = localStorage.getItem("loggerduser");
    if (authkey) {
      setIsAuth(true);
    }
  }, []);
  return (
    <Authcontext.Provider
      value={{
        isAuth,
        setIsAuth,
        login,
        authkey,
        setMailid,
        setpassword,
        nouser,
        signout,
        signup,
        loginhandler,
        mailid,
        password,
      }}
    >
      {children}
    </Authcontext.Provider>
  );
};
