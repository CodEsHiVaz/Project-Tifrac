import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import style from "./VideoCheat.module.css";
import { Navbar } from "../Home/Navbar";

const Videos = () => {
  const [data, setData] = useState([]);
  let navigate = useNavigate();
  const { id } = useParams();
  console.log("id", id);
  console.log(data);
  useEffect(() => {
    axios
      .get(`https://floating-temple-32872.herokuapp.com/subjects/id/${id}`)
      .then((r) => setData(r.data));
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Navbar/>
    <div>
      {data.map((el) => (
        <div className={style.mainDivAt}>
          <div key={el._id}>
            <div className={style.vidAt}>
              <a href={el.vid_1} target="_blank">
                <img
                  src={el.thum_1}
                  style={{ width: "100%", height: "100%" }}
                />
              </a>
              <p className={style.videoParaAt}>{el.t1}</p>
            </div>
            <div className={style.vidAt}>
              <a href={el.vid_2} target="_blank">
                <img
                  src={el.thum_2}
                  style={{ width: "100%", height: "100%" }}
                />
              </a>
              <p className={style.videoParaAt}>{el.t2}</p>
            </div>
          </div>

          <Link to={`/cheatsheet/${el._id}`}>
            <h1 className={style.cheatsheetAt}> CHEATSHEET</h1>
          </Link>
        </div>
      ))}
      </div>
    </>
  );
};

export default Videos;
