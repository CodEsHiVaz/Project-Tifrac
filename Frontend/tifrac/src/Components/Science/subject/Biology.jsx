import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import style from "./subject.module.css";
import { Footer } from "../../Home/Footer";

const Biology = () => {
  const [data, setData] = useState([]);

  let navigate = useNavigate();
  let handleClick = (id) => {
    navigate(`/videos/${id}`);
  };

  useEffect(() => {
    axios
      .get("https://floating-temple-32872.herokuapp.com/subjects/biology")
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
          <div className={style.midTitle}>Biology</div>
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
            src="https://media.istockphoto.com/photos/corona-virus-covid19-dna-illustration-picture-id1297202819?b=1&k=20&m=1297202819&s=170667a&w=0&h=Vs7-6B_3lF_NQn5UfxWSR7G2ORkoJkWfUTHkPOkh_nk="
            alt=""
          />
          <img
            style={{ width: "80%", marginTop: "4rem", borderRadius: "1rem" }}
            src="https://images.unsplash.com/photo-1619472351888-f844a0b33f5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJpb2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <img
            style={{ width: "80%", marginTop: "4rem", borderRadius: "1rem" }}
            src="https://images.unsplash.com/photo-1532153470116-e8c2088b8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmlvbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Biology;
