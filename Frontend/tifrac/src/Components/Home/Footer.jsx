import React from 'react'
import styles from "./Footer.module.css"
export const Footer = () => {
  return (
    <div className={styles.footermain}>
        <hr style={{marginTop:"5vh",width:"80%"}} />
        <div style={{marginTop:"10vh",display:"flex",justifyContent:"space-around"}}>
            {/* Left div */}
            
            <div > 
                <div style={{width:"100%",margin:"auto",color:"grey",paddingLeft:"7%"}}>COMPANY</div>
                <div className={styles.prfooterleft}>
                        <div >
                            <ul style={{listStyle:"none",lineHeight:"2rem"}}>
                                <li>About Us</li>
                                <li>Brand Resources</li>
                                <li>Jobs</li>
                                <li>Press</li>
                                <li>Student Reviews</li>
                            </ul>
                        </div>
                        <div>
                            <ul  style={{listStyle:"none",lineHeight:"2rem"}}>
                                <li>Customer Stories</li>
                                <li>Fellowships</li>
                                <li>Guides</li>
                                <li>Parents Reviews</li>
                                <li>Teacher Reviews</li>
                            </ul>
                        </div>
                        <div>
                            <ul  style={{listStyle:"none",lineHeight:"2rem"}}>
                                <li>Ask</li>
                                <li>Blogs</li>
                                <li>News</li>
                                <li>Take a tour</li>
                                
                            </ul>
                        </div>
                </div>
            </div>    
            {/* Right div */}
             <div>
             <div style={{width:"100%",margin:"auto",color:"grey"}}>FEATURES</div>  
             <div className={styles.prfooterright}>
            
            <div>
                <ul  style={{listStyle:"none",lineHeight:"2rem"}}>
                    <li>Video Classes</li>
                    <li>All India Test Series</li>
                    <li>Student Stories</li>
                    <li>Previous Stories</li>
                    
                </ul>
            </div>
            <div>
                <ul  style={{listStyle:"none",lineHeight:"2rem"}}>
                    <li>Create your own Tests</li>
                    <li>24/7 help</li>
                    <li>Expert tutors</li>
                    <li>Live Classes</li>
                    
                </ul>
            </div>
        </div>
             </div>

        </div>
        
       
        {/* Bottom div */}
        <div className={styles.prfooterend}>
                <div><i class="fa-brands fa-facebook fa-3x"></i></div>
                <div><i class="fa-brands fa-square-instagram fa-3x"></i></div>
                <div><i class="fa-brands fa-square-twitter fa-3x"></i></div>
                <div><i class="fa-brands fa-linkedin fa-3x"></i></div>
                
        </div>
    </div>
  )
}
