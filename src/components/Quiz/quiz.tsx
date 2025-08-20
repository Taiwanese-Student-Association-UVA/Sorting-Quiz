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
  const handleChoice = (answerIndex: number) => {
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
    for (let i = 0; i < questions.length; i++) {
      let index = answers[i];
      let score = questions[i].answers[index][1] as number;
      totalScore += score;
      console.log(totalScore);
    }
    let num = totalScore;
    if (7 <= num && num <= 20) {
      return "Pheasant";
    } else if (21 <= num && num <= 34) {
      return "Pangolin";
    } else if (35 <= num && num <= 41) {
      return "Deer";
    } else if (42 <= num && num <= 100) {
      return "Viper";
    }
  }

  // once finished with all of the questions, grab the result and display the correct fam page
  if (isFinished) {
    let result = getQuizResult();
    switch (result) {
      case "Pheasant":
        return <Pheasant />;
      case "Pangolin":
        return <Pangolin />;
      case "Deer":
        return <Deer />;
      case "Viper":
        return <Viper />;
    }
  }

  return (
    <>
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
                answers[currentQuestion] === idx ? "#5855df" : "white",
            }}
          >
            {opt[0]}
          </button>
        ))}
        <div className="next">
          <button onClick={prevQuestion} disabled={currentQuestion === 0}>
            Back
          </button>
          <button
            onClick={nextQuestion}
            disabled={answers[currentQuestion] === null}
          >
            Next
          </button>
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
    image: logo,
    answers: [
      ["Early, who knows if I might get lost!", 1],
      ["Calculate to be just on time", 3],
      ["Take your time—it’s not that deep", 5],
      ["Whenever I feel like it", 6],
    ],
  },

  // question 2
  {
    question: "What will you wear",
    image: logo,
    answers: [
      ["Cute, gotta doll up", 1],
      ["Cool, must maintain aura", 6],
      ["Professional, never know what connections I can make", 3],
      ["I dont gaf", 5],
    ],
  },

  // question 3
  {
    question: "How will you get there",
    image: logo,
    answers: [
      ["Walk, gotta get my steps in", 5],
      ["Bus, I'm nawt walking", 3],
      ["Uber, no plebs in my area", 1],
      ["Veo, …", 6],
    ],
  },

  // question 4
  {
    question: "See someone with their backpack open, wyd?",
    image: logo,
    answers: [
      ["Pretend you don’t see", 1],
      ["Laugh, that’s embarrassing haha", 6],
      ["Tell them, can’t do them like that", 5],
      ["Try to zip it back up… but backfires", 3],
    ],
  },

  // question 5
  {
    question: "You get there, wyd",
    image: logo,
    answers: [
      ["Sit down right away", 1],
      ["Wait for friends", 3],
      ["Go on phone", 6],
      ["Start talking to new people", 5],
    ],
  },

  // question 6
  {
    question: "What boba flavor ru getting?",
    image: logo,
    answers: [
      ["Thai Tea", 5],
      ["Passionfruit Tea", 3],
      ["Water please!", 1],
      ["Nothing. Let me dehydrate in peace", 6],
    ],
  },

  // question 7
  {
    question: "After gbm where u going",
    image: logo,
    answers: [
      ["Let's volleyball", 3],
      ["Yap with the people", 5],
      ["Explore Newcomb Ballroom", 6],
      ["Go straight home", 1],
    ],
  },
];

export default Quiz;
