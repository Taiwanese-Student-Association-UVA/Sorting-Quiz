import { useState } from "react";
import "./quiz.css";
import Pheasant from "../FamPages/Pheasant";
import Pangolin from "../FamPages/Pangolin";
import Deer from "../FamPages/Deer";
import Viper from "../FamPages/Viper";
import {
  first,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
} from "../../assets/question/question";

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
            className="question-button"
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
    question:
      "The time is drawing near to depart for TSA's GBM! How early will you leave?",
    image: first,
    answers: [
      ["I have to leave early, who knows if I might get lost!", 1],
      ["I'll calculate to be just on time. There's no need to be early.", 3],
      ["I'll take my time—it’s not that deep.", 5],
      ["Meh, I'll go Whenever I feel like it.", 6],
    ],
  },

  // question 2
  {
    question:
      "Oops, before you leave, you have to choose a fit! What are you going to wear?",
    image: second,
    answers: [
      ["I'll wear something cute! I gotta doll up :3", 1],
      ["Just a calm luh fit you feel. You know I'll ptso tsts", 6],
      [
        "Something professional, you never know what connections I can make.",
        3,
      ],
      ["I'll just throw something on...I dont gaf :p", 5],
    ],
  },

  // question 3
  {
    question:
      "Now that you're finally ready for you journey ahead, how are you going to get there?",
    image: third,
    answers: [
      ["I gotta get my steps in, so I'll walk", 5],
      ["I'll bus, I paid those comprehensive fees after all!", 3],
      ["Mmmm I'll Uber. I don't want any plebs in my area.", 1],
      ["Veo…", 6],
    ],
  },

  // question 4
  {
    question:
      "You get to the entrance of Newcomb, but you spot someone with their backpack open! What will you do?",
    image: fourth,
    answers: [
      ["Walk ahead and pretend I don’t see. That's none of my business...", 1],
      ["Laugh, that’s embarrassing LOL", 6],
      ["Tell them, I can’t do them like that!", 5],
      [
        "Try to zip it back up…but that backfires and they notice...(how awkward >o<)",
        3,
      ],
    ],
  },

  // question 5
  {
    question: "You finally arrive at Newcomb Ballroom (yippee!!!).  there, wyd",
    image: fifth,
    answers: [
      ["Sit down right away, ", 1],
      ["Wait for friends", 3],
      ["Go on phone", 6],
      ["Start talking to new people", 5],
    ],
  },

  // question 6
  {
    question: "What boba flavor ru getting?",
    image: sixth,
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
    image: seventh,
    answers: [
      [
        "Let's roll volleyball!! I wanna show off what I've learned from Haikyuu.",
        3,
      ],
      ["Yap with the people, I ", 5],
      ["I lowk Explore Newcomb Ballroom", 6],
      ["I'm gonna go straight home. Today drained me >.<", 1],
    ],
  },
];

export default Quiz;
