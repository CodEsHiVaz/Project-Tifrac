import React from 'react'
import styles from "./Navbar.module.css"
export const Navbar = () => {
  return (
    <div className={styles.prmaincontainer}>
        <div className={styles.prhelpercontainer}>HELPER</div>
        <div className={styles.prsubjectcontainer}>
            <div>PHYSICS</div>
            <div>CHEMISTRY</div>
            <div>MATHS</div>
            <div>BIOLOGY</div>
        </div>
        <div className={styles.prloginsignup}>
            <div className={styles.prlogsignindi}>Login</div>
            <div className={styles.prlogsignindi}>Signup</div>
        </div>
    </div>
  )
}
