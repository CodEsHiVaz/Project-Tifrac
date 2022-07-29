import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import style from "./subject.module.css";
import { Footer } from "../../Home/Footer";

const Chemistry = () => {
  const [data, setData] = useState([]);

  let navigate = useNavigate();
  let handleClick = (id) => {
    navigate(`/videos/${id}`);
  };

  useEffect(() => {
    axios
      .get("https://floating-temple-32872.herokuapp.com/subjects/Chemistry")
      .then((r) => setData(r.data));
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={style.mainAt}>
        <div className={style.leftAt}>
          <Sidebar />
        </div>
        <div className={style.middleAt}>
          <div className={style.midTitle}>Chemistry</div>
          {data?.map((el, index) => (
            <>
              <div
                key={el._id}
                className={style.dataTitle}
                onClick={() => handleClick(el._id)}
              >
                <h3>
                  <span style={{ marginRight: "1rem", color: "orange" }}>
                    {index + 1}
                  </span>
                  {el.title}
                </h3>
                <p style={{ marginLeft: "2rem", marginTop: "-.5rem" }}>
                  2 videos
                </p>
              </div>
              <hr style={{ width: "80%" }} />
            </>
          ))}
        </div>
        <div className={style.rightAt}>
          <img
            style={{ width: "80%", marginTop: "4rem", borderRadius: "1rem" }}
            src="https://media.istockphoto.com/photos/chemical-tube-with-reaction-formula-picture-id655439586?b=1&k=20&m=655439586&s=170667a&w=0&h=WhtTLmLZB2WIPjwM86HHWdbRtkE-WJSQIatxxWUv5Gw="
            alt=""
          />
          <img
            style={{ width: "80%", marginTop: "2rem", borderRadius: "1rem" }}
            src="https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlbWlzdHJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <img
            style={{ width: "80%", marginTop: "2rem", borderRadius: "1rem" }}
            src="https://images.unsplash.com/photo-1608037222022-62649819f8aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNoZW1pc3RyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <img
            style={{ width: "80%", marginTop: "2rem", borderRadius: "1rem" }}
            src="https://media.istockphoto.com/photos/flask-in-scientist-hand-with-laboratory-background-picture-id624034258?b=1&k=20&m=624034258&s=170667a&w=0&h=FzVh0SpiLloDc-h2l5hmmF39PKX8ZROWSixrVCvQGmc="
            alt=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Chemistry;
