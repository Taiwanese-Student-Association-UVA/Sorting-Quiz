import { useState } from "react";
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

  const handleChoice = (choice) => {
    setPoints((prev) => ({
      ...prev,
      [choice]: (prev[choice] ?? 0) + 1,
    }));

    if (index + 1 < Object.keys(data).length) {
      setIndex(index + 1);
    }
  };

  return (
    <div className="container">
      <p>
        Viper: {points.viper ?? 0}
        <br />
        Deer: {points.deer ?? 0}
        <br />
        Pheasant: {points.pheasant ?? 0}
        <br />
        Pangolin: {points.pangolin ?? 0}
      </p>
      <h1>Sorting Quiz!</h1>
      <hr />
      <div className="image-box">
        <img src={logo} alt="TSA logo" />
        <h2>{question.question}</h2>
      </div>
      <button onClick={() => handleChoice(question.options.a[1])}>
        {question.options.a[0]}
      </button>
      <button onClick={() => handleChoice(question.options.b[1])}>
        {question.options.b[0]}
      </button>
      <button onClick={() => handleChoice(question.options.c[1])}>
        {question.options.c[0]}
      </button>
      <button onClick={() => handleChoice(question.options.d[1])}>
        {question.options.d[0]}
      </button>
    </div>
  );
};

export default Quiz;
