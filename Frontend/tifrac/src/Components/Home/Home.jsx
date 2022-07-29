import React from "react";
import { Navbar } from "./Navbar";
import styles from "./Home.module.css"
import {useNavigate} from "react-router-dom"
import { Footer } from "./Footer";
const Home = () => {
let [talk,setTalk]=React.useState(false)
let [mail,setMail]=React.useState({email:""})
let awardarr=[{imglink:"https://static-cf.toppr.com/marketing/7af27c4/images/home/Award.svg",catg:"Best Tech in Education",by:"IAMAI India Digital Awards 2019"},
              {imglink:"https://static-cf.toppr.com/marketing/7af27c4/images/home/Award_GlobalEdTech.svg",catg:"Top 50 Growth Companies",by:"GSV Global Edtech 2020"},
              {imglink:"https://static-cf.toppr.com/marketing/7af27c4/images/home/Award.svg",catg:"Best in Education Industry",by:"AWS Mobility Awards 2017"},
              {imglink:"https://static-cf.toppr.com/marketing/7af27c4/images/home/Award.svg",catg:"Best Education Platform",by:"Indian Education Awards 2018"},
              {imglink:"https://static-cf.toppr.com/marketing/7af27c4/images/home/Award.svg",catg:"Top 20",by:"Edtechxglobal Scale-up Award 2019"},
              {imglink:"https://static-cf.toppr.com/marketing/7af27c4/images/home/Award.svg",catg:"Best Tech in Education",by:"IAMAI India Digital Awards 2017"}]

let boards=[{brdlnk:"https://static-cf.toppr.com/marketing/7af27c4/images/home/boards/ap_board-50.png"},
            {brdlnk:"https://static-cf.toppr.com/marketing/7af27c4/images/home/boards/cbse-50.png"},
            {brdlnk:"https://static-cf.toppr.com/marketing/7af27c4/images/home/boards/goa_board-50.png"},
            {brdlnk:"	https://static-cf.toppr.com/marketing/7af27c4/images/home/boards/karnataka_board-50.png"},
            {brdlnk:"https://static-cf.toppr.com/marketing/7af27c4/images/home/boards/meghalaya_board-50.png"},
            {brdlnk:"	https://static-cf.toppr.com/marketing/7af27c4/images/home/boards/mh_board-50.png"},
            {brdlnk:"	https://static-cf.toppr.com/marketing/7af27c4/images/home/boards/mp-board-50.png"},
            {brdlnk:"https://static-cf.toppr.com/marketing/7af27c4/images/home/boards/odisha_board-50.png"},
            {brdlnk:"https://static-cf.toppr.com/marketing/7af27c4/images/home/boards/telangana_board-50.png"},]
let exams=[{examlnk:"https://static-cf.toppr.com/marketing/7af27c4/images/home/exams/aiims-50.png"},
            {examlnk:"https://static-cf.toppr.com/marketing/7af27c4/images/home/exams/bitsat-50.png"},
            {examlnk:"	https://static-cf.toppr.com/marketing/7af27c4/images/home/exams/cma_foundation-50.png"},
            {examlnk:"https://static-cf.toppr.com/marketing/7af27c4/images/home/exams/ieo-50.png"},
            {examlnk:"https://static-cf.toppr.com/marketing/7af27c4/images/home/exams/igko-50.png"},
            {examlnk:"https://static-cf.toppr.com/marketing/7af27c4/images/home/exams/jee-main-50.png"},
            {examlnk:"https://static-cf.toppr.com/marketing/7af27c4/images/home/exams/nso-50.png"},
            {examlnk:"https://static-cf.toppr.com/marketing/7af27c4/images/home/exams/nstse-50.png"},
            {examlnk:"	https://static-cf.toppr.com/marketing/7af27c4/images/home/exams/sat-50.png"},]
           
  let handleChange=(e)=>{
   e.preventDefault()
   setMail({...mail,[e.target.name]:e.target.value})
  }
  let handleSubmit=()=>{
   
console.log(mail)
localStorage.setItem("usermail",mail.email)
setTalk(false)
window.location.href="https://friendly-pothos-7ba9cc.netlify.app/"
//https://silver-fox-54971d.netlify.app
// https://friendly-pothos-7ba9cc.netlify.app/
   }
  return (
  <>
  <Navbar/>
  
    
    <div className={styles.prfirstbanner}>
      <div>Better Learning. Better Result.</div>
      <div>One Platform for all your science learning.</div>
    </div>
    <div className={styles.prawards}>
      India's Most Awarded Tech Platform
    </div>
    <div className={styles.prallawards}>
      {
        awardarr.map((el)=>(
       
          <div className={styles.prindiawards}>
              <div style={{width:"20%"}}>
                  <img style={{height:"100%",width:"100%"}} src={el.imglink}></img>
              </div>
              <div style={{width:"80%",marginTop:"5%"}}>
                  <div style={{fontSize:"large",fontWeight:"400"}}>{el.catg}</div>
                  <div style={{color:"grey"}}>{el.by}</div>
              </div>
          </div>
         
          
        ))
      }
   </div>
   <div className={styles.prforall}>
      <div>
        Build for all boards with <span style={{color:"#29abfc"}}>widest</span> syllabus coverage
      </div>
      <div className={styles.prlearning}>
          <p style={{marginBottom:"10%",marginTop:"10%",fontSize:"2rem",fontWeight:500}}>Your learning needs are unique and we do everything to ensure that they are met.</p>
          <p style={{fontSize:"1rem"}}>Students can chart their own path by creating customised syllabus that helps them attain their learning goals. 
            With over 120,000 syllabus combinations at their disposal to choose from, learning was never so easy.</p>
      </div>
   </div>
   <div style={{width:"80%",margin:"auto",display:"flex",justifyContent:"space-between"}}>
      <div className={styles.prboards}>
        { boards.map((el)=>(
          <div style={{height:"60%",width:"60%",margin:"auto"}}>
            <img src={el.brdlnk} style={{height:"100%",width:"100%"}}/>
          </div>
        ))

        }
      </div>
      
       <div className={styles.prboards}>
        { exams.map((el)=>(
          <div style={{height:"60%",width:"60%",margin:"auto"}}>
            <img src={el.examlnk} style={{height:"100%",width:"100%",textAlign:"center"}}/>
          </div>
        ))

        }
      
      </div>
     
   </div>
   <div style={{width:"80%",margin:"auto",display:"flex",justifyContent:"space-between"}}>
      <div className={styles.prboardsandexam}>
          <div  style={{fontFamily:"Trebuchet MS",fontSize:"2rem",fontWeight:"800"}}>22 Boards</div>
          <p>
          We cater to students across the country from all major boards including CBSE, 
          ICSE, IGCSE and state boards like Maharashtra, Karnataka, Madhya Pradesh, Rajasthan, UP, West Bengal and many others.
          </p>
      </div>
      <div className={styles.prboardsandexam}>
          <div style={{fontFamily:"Trebuchet MS",fontSize:"2rem",fontWeight:"800"}}>58 Exams</div>
          <p>
          Students have different goals and aspirations. Helper covers all major competitive exams like JEE, NEET, 
           and Olympiads and Scholarship Exams like NTSE, KVPY etc, for their better learning.
          </p>
      </div>

   </div>
   {talk && <div style={{width:"40%",marginBottom:"2%",height:"5vh",margin:"auto",fontWeight:"800"}}><p >Our representative will send the meeting id to the entered mail.</p></div>}
   {talk && <div style={{width:"80%",margin:"auto"}}><input value={mail.email} name="email" onChange={(e)=>handleChange(e)} style={{width:"40%",marginTop:"-30%",marginBottom:"2%",height:"5vh",border:"1px solid green",textAlign:"center"}}placeholder="Please enter your mail-id"/> <button onClick={handleSubmit} style={{width:"20%",marginBottom:"2%",height:"5vh",backgroundColor:"green",color:"white"}}>Submit</button></div>}
  
   <div onClick={()=>setTalk(true)} className={styles.prtalktosales}>Talk to us anytime..</div>
  
  <Footer/>
  </>
  )
};

export default Home;
