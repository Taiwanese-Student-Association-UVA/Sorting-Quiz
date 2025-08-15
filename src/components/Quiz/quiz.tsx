import { useState } from "react";
import "./quiz.css";
import logo from "../../assets/logo.png";
import Pheasant from "../FamPages/Pheasant";
import Pangolin from "../FamPages/Pangolin";
import Deer from "../FamPages/Deer";
import Viper from "../FamPages/Viper";

const Quiz = () => {
  // score tracker and state arrays
  let totalScore = 0;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [isFinished, setIsFinished] = useState(false);

  // once answer is chosen, add the score to totalScore
  // create a shallow copy of the answers state array and stores answer user has chosen
  const handleChoice = (answerIndex) => {
    totalScore += Object.values(
      questions[currentQuestion].answers[answerIndex]
    )[0];
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  // goes to the result page when clicking next on the last question
  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  // goes back to the previous button
  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  // score ranges for respective fams
  function getQuizResult() {
    if (totalScore <= 10) {
      return "Pheasant";
    } else if (11 <= totalScore && totalScore <= 20) {
      return "Pangolin";
    } else if (21 <= totalScore && totalScore <= 30) {
      return "Deer";
    } else if (31 <= totalScore) {
      return "Viper";
    }
  }

  /*
  // final result pages:
  function Pheasant() {
    return <Pheasant />;
  }
  function Pangolin() {
    return <Pangolin />;
  }
  function Deer() {
    return <Deer />;
  }
  function Viper() {
    return <Viper />;
  }
  */

  // once finished with all of the questions, grab the result and display the correct fam page
  if (isFinished) {
    let result = getQuizResult();
    switch (result) {
      case "Pheasant":
        return Pheasant();
      case "Pangolin":
        return Pangolin();
      case "Deer":
        return Deer();
      case "Viper":
        return Viper();
    }
  }

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
      <div className="container">
        <div className="image-box">
          <img src={questions[currentQuestion].image} alt="TSA logo" />
        </div>
        <h2>{questions[currentQuestion].question}</h2>
        {questions[currentQuestion].answers.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleChoice(idx)}
            style={{
              background:
                answers[currentQuestion] === idx ? "lightblue" : "white",
            }}
          >
            {Object.keys(opt)[0]}
          </button>
        ))}
        <div className="next">
          <button onClick={prevQuestion} disabled={currentQuestion === 0}>
            Back
          </button>
          <button onClick={nextQuestion}>Next</button>
        </div>
      </div>
    </>
  );
};

// question array
const questions = [
  // question 1
  {
    question: "How early will you depart",
    image: "../../assets/logo.png",
    answers: [
      { "Early, who knows if I might get lost!": 3 },
      { "Calculate to be just on time": 7 },
      { "Take your time—it’s not that deep": 1 },
      { "Whenever I feel like it": 9 },
    ],
  },

  // question 2
  {
    question: "What will you wear",
    image: "../../assets/logo.png",
    answers: [
      { "Cute, gotta doll up": 4 },
      { "Cool, must maintain aura": 8 },
      {
        "Professional, never know what connections I can make": 5,
      },
      { "I dont gaf": 2 },
    ],
  },

  // question 3
  {
    question: "How will you get there",
    image: "../../assets/logo.png",
    answers: [
      { "Walk, gotta get my steps in": 1 },
      { "Bus, I'm nawt walking": 6 },
      { "Uber, no plebs in my area": 3 },
      { "Veo, …": 7 },
    ],
  },

  // question 4
  {
    question: "See someone with their backpack open, wyd?",
    image: "../../assets/logo.png",
    answers: [
      { "Pretend you don’t see": 2 },
      { "Laugh, that’s embarrassing haha": 9 },
      { "Tell them, can’t do them like that": 5 },
      { "Try to zip it back up… but backfires": 6 },
    ],
  },

  // question 5
  {
    question: "You get there, wyd",
    image: "../../assets/logo.png",
    answers: [
      { "Sit down right away": 3 },
      { "Wait for friends": 7 },
      { "Go on phone": 8 },
      { "Start talking to new people": 1 },
    ],
  },

  // question 6
  {
    question: "What boba flavor ru getting?",
    image: "../../assets/logo.png",
    answers: [
      { "Thai Tea": 4 },
      { "Passionfruit Tea": 6 },
      { Water: 2 },
      { Nothing: 9 },
    ],
  },

  // question 7
  {
    question: "After gbm where u going",
    image: "../../assets/logo.png",
    answers: [
      { Volleyball: 7 },
      { "Yap with the people": 1 },
      { "Explore Newcomb Ballroom": 8 },
      { "Go straight home": 3 },
    ],
  },
];

export default Quiz;
