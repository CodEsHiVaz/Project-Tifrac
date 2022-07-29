import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import style from "./subject.module.css";
import { Footer } from "../../Home/Footer";

const Maths = () => {
  const [data, setData] = useState([]);

  let navigate = useNavigate();
  let handleClick = (id) => {
    navigate(`/videos/${id}`);
  };

  useEffect(() => {
    axios
      .get("https://floating-temple-32872.herokuapp.com/subjects/maths")
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
          <div className={style.midTitle}>Maths</div>
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
            style={{ width: "80%", marginTop: "3rem", borderRadius: "1rem" }}
            src="https://images.unsplash.com/photo-1548690596-f1722c190938?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG1hdGhzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <img
            style={{ width: "80%", marginTop: "3rem", borderRadius: "1rem" }}
            src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWF0aHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <img
            style={{ width: "80%", marginTop: "2rem", borderRadius: "1rem" }}
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWF0aHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <img
            style={{ width: "80%", marginTop: "2rem", borderRadius: "1rem" }}
            src="https://images.unsplash.com/photo-1635070040809-d434392ae756?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG1hdGhzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Maths;
