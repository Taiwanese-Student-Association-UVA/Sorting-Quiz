import { useState } from "react";
import "./quiz.css";
import logo from "../../assets/logo.png";
// import { questions, getQuizResult } from "../../assets/logic";

const Quiz = () => {
  return (
    <>
      <div className="container">
        <h1>Sorting Quiz!</h1>
        <hr />
        <div className="image-box">
          <img src={logo} alt="TSA logo" />
        </div>
        <div className="next">
          <button>Next</button>
        </div>
      </div>
    </>
  );
};

export default Quiz;
