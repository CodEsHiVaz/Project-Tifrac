# Project-Tifrac

HELPER is a one stop destination for the students of 12th grade to sharpen their physics, chemistry, maths and biology. 

HELPER provides video lectures for a wide variety of topics in each of the above mentioned field. 

TECH stack used: MongoDB, Express, React, NodeJS.

Additional libraries used: http, socket.io, cors, dotenv, simple-peer.

<b>Pages</b>
1) Home page

   The home page has a navbar that contains routes to different subject pages and also the login and signup.

   It also specifies why a student should join us to sharpem their skills in the above mentioned subjects.

   A student can also speak to our representative by simply logging in and then clicking on the "Talk to us now" button.

2) Login and signup.

   The login and signup is implemented with the use of context API. The data entered by the user in the login or signup section is send to the backend that is build        using Express, Mongoose ,MongoDB and NodeJS. 
 
   We have also made use of Google auth toenable user to sign up and login via his/her gmail account.
 
   Post successfull login the user will be routed to home page.

3) Subjects page.
  
   On clicking any subject in the navbar the student will be routed to that particular subject's page. The data for the subject comes from the backend. 
  
   On clicking on any topic withing the subject page the user will be able to see a list of available videos for that particular topic. We also provide the students       with cheatsheets for each and every topic. 
  
4) Videochat.

   A student can connect to our representative by simply clicking on the "Talk to us now" button. On clicking this button the student will be routed to a different        site. Here the student can simply click on the copy ID button to get his ID. Now click on the "Click here to mail" and simply paste the id into the body of the mail    and click send. Within minutes the student will receive a videocall from our representative.

Netlify Deploy link :https://profound-cupcake-844742.netlify.app/
