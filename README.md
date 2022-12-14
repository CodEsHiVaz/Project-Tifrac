# Project-Tifrac
The 12th grade exams have an extreme significane in the life of a student. It can act as a pivot point in one's career especially if you are pursuing science as your subject. With so many edtech platforms available a student can get confused on where to study from. Even if you narrow down to a particular website/app you will be flodded with irrelevant information on a daily basis. Navigating to your courses can become pretty difficult in those scenarios. Hence we came up with HELPER, specifically tailored for a 12th grade science student.

HELPER is a one stop destination for the students of 12th grade to sharpen their physics, chemistry, maths and biology. 

HELPER provides video lectures for a wide variety of topics in each of the above mentioned field. 

TECH stack used: MongoDB, Express, React, NodeJS.

Additional libraries used: http, socket.io, cors, dotenv, simple-peer.

<b>Pages</b>
1) <b>Home page</b>
   
   ![myremoteimage](https://i.postimg.cc/xTNxjpz8/helperhome.png)
   
   The home page has a navbar that contains routes to different subject pages and also the login and signup.

   It also specifies why a student should join us to sharpem their skills in the above mentioned subjects.

   A student can also speak to our representative by simply logging in and then clicking on the "Talk to us now" button.

2) <b>Login and signup.</b>

   ![myremoteimage](https://i.postimg.cc/sXyd5d5T/helper-login.png)

   The login and signup is implemented with the use of context API. The data entered by the user in the login or signup section is send to the backend that is build        using Express, Mongoose ,MongoDB and NodeJS. 
 
   We have also made use of Google auth toenable user to sign up and login via his/her gmail account.
 
   Post successfull login the user will be routed to home page.

3) <b>Subjects page.</b>

   ![myremoteimage](https://i.postimg.cc/m2nv8FQz/helperphysics.png)
  
   On clicking any subject in the navbar the student will be routed to that particular subject's page. The data for the subject comes from the backend. 
  
   On clicking on any topic withing the subject page the user will be able to see a list of available videos for that particular topic. We also provide the students       with cheatsheets for each and every topic. 
  
4) <b>Videochat.</b>

   ![myremoteimage](https://i.postimg.cc/YCfJkD5g/helpersalescall.png)
   
   A student can connect to our representative by simply clicking on the "Talk to us now" button. On clicking this button the student will be routed to a different        site. Here the student can simply click on the copy ID button to get his ID. Now click on the "Click here to mail" and simply paste the id into the body of the mail    and click send. Within minutes the student will receive a videocall from our representative.

   
   Netlify Deploy link :https://profound-cupcake-844742.netlify.app/
