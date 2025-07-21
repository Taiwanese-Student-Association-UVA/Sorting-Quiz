import React, { useState } from "react";
import "./quiz.css";
import logo from "../../assets/logo.png";
import { data } from "../../assets/data";

const Quiz = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [points, setPoints] = useState({
    viper: 0,
    deer: 0,
    pheasant: 0,
    pangolin: 0,
  });

  return (
    <div className="container">
      <h1>Sorting Quiz!</h1>
      <hr />
      <div className="image-box">
        <img src={logo} alt="TSA logo" />
        <h2>{question.question}</h2>
      </div>
      <button>{question.options.a[0]}</button>
      <button>{question.options.b[0]}</button>
      <button>{question.options.c[0]}</button>
      <button>{question.options.d[0]}</button>
    </div>
  );
};

export default Quiz;
