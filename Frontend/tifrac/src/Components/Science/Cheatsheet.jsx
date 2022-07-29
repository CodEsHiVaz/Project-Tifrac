import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import style from "./VideoCheat.module.css";
import { Navbar } from "../Home/Navbar";

const Cheatsheet = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://floating-temple-32872.herokuapp.com/subjects/id/${id}`)
      .then((r) => setData(r.data));
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Navbar/>
    <div style={{marginTop:"5rem"}}>
      {data?.map((el) => (
        <div className={style.cheatSingAt}>
          <img src={el.cheat_img_1} alt="" className={style.cheatImgAt} />
          <img src={el.cheat_img_2} alt="" className={style.cheatImgAt} />
          <img src={el.cheat_img_3} alt="" className={style.cheatImgAt} />
        </div>
      ))}
    </div>
    </>
  );
};

export default Cheatsheet;
