import React from "react";
import style from "./sidebar.module.css";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
    let navigate=useNavigate()
  let gotohome=()=>{
    navigate("/")
  }
  return (
    <div>
      <div className={style.titleAt} onClick={gotohome}>HELPER</div>
      <div className={style.linkSidebarDivAt}>
        <Link className={style.linkSidebarAt} to="/physics">PHYSICS</Link>
      </div>
      <div className={style.linkSidebarDivAt}>
        <Link className={style.linkSidebarAt} to="/chemistry">CHEMISTRY</Link>
      </div>
      <div className={style.linkSidebarDivAt}>
        <Link className={style.linkSidebarAt} to="/maths">MATHS</Link>
      </div>
      <div className={style.linkSidebarDivAt}>
        <Link className={style.linkSidebarAt} to="/biology">BIOLOGY</Link>
      </div>
    </div>
  );
};

export default Sidebar;
