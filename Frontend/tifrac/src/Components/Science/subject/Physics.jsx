import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import style from "./subject.module.css";
import { Footer } from "../../Home/Footer";

const Physics = () => {
  const [data, setData] = useState([]);

  let navigate = useNavigate();
  let handleClick = (id) => {
    navigate(`/videos/${id}`);
  };

  useEffect(() => {
    axios
      .get("https://floating-temple-32872.herokuapp.com/subjects/physics")
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
          <div className={style.midTitle}>Physics</div>
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
            style={{ width:"80%",marginTop: "4rem", borderRadius: "1rem" }}
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <img
            style={{ width:"80%",marginTop: "4rem", borderRadius: "1rem" }}
            src="https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGh5c2ljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <img
            style={{ width:"80%",marginTop: "4rem", borderRadius: "1rem" }}
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGh5c2ljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <img
            style={{ width:"80%",marginTop: "4rem", borderRadius: "1rem" }}
            src="https://media.istockphoto.com/photos/model-of-atom-and-elementary-particles-physics-concept-3d-rendered-picture-id1270632735?s=612x612"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Physics;
