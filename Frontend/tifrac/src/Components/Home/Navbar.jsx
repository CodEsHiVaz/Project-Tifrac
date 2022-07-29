import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./Navbar.module.css"
export const Navbar = () => {
  let navigate=useNavigate()
  let gotologin=()=>{
    navigate("/login")
  }
  let gotosignup=()=>{
    navigate("/signup")
  }
  let gotohome=()=>{
    navigate("/")
  }
  return (
    <div className={styles.prmaincontainer}>
        <div onClick={gotohome}className={styles.prhelpercontainer}>HELPER</div>
        <div className={styles.prsubjectcontainer}>
            <div>PHYSICS</div>
            <div>CHEMISTRY</div>
            <div>MATHS</div>
            <div>BIOLOGY</div>
        </div>
        <div className={styles.prloginsignup}>
            <div onClick={gotologin}className={styles.prlogsignindi}>Login</div>
            <div onClick={gotosignup} className={styles.prlogsignindi}>Signup</div>
        </div>
    </div>
  )
}
