import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Authcontext } from '../Context Api/Authcontext'
import styles from "./Navbar.module.css"
export const Navbar = () => {
  let navigate = useNavigate()
  const { isAuth, signout } = useContext(Authcontext)
  let gotologin = () => {
    navigate("/login")
  }
  let gotosignup = () => {
    navigate("/signup")
  }
  let gotohome = () => {
    navigate("/")
  }
  let gotoPhy = () => {
    navigate("/physics")
  }
  let gotoChem = () => {
    navigate("/chemistry")
  }
  let gotoMath = () => {
    navigate("/maths")
  }
  let gotoBio = () => {
    navigate("/biology")
  }
  return (
    <div className={styles.prmaincontainer}>
      <div onClick={gotohome} className={styles.prhelpercontainer}>HELPER</div>
      <div className={styles.prsubjectcontainer}>
        <div onClick={gotoPhy}>PHYSICS</div>
        <div onClick={gotoChem}>CHEMISTRY</div>
        <div onClick={gotoMath}>MATHS</div>
        <div onClick={gotoBio}>BIOLOGY</div>
      </div>
      {!isAuth && <div className={styles.prloginsignup}>
        <div onClick={gotologin} className={styles.prlogsignindi}>Login</div>
        <div onClick={gotosignup} className={styles.prlogsignindi}>Signup</div>
      </div>
      }
      { isAuth && <div className={styles.prloginsignup}>
        <div  onClick={signout} className={styles.prlogsignindi}>Signout</div>
        </div>

      }

    </div>
  )
}
