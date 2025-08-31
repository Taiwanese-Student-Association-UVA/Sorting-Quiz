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
  // totalScore: [pheasant, pangolin, deer, viper]
  let totalScore = [0, 0, 0, 0];
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

  // goes to the next question; goes to result page when clicking next on the last question
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

  // goes through each question and grabs the index of the answer chosen
  // gets the corresponding index for totalScore and adds 1 to the respective fam score
  // returns the fam with the most points, and if there is a tie, the fam with the most
  //   points that came first
  function getQuizResult() {
    for (let i = 0; i < questions.length; i++) {
      let answerInd = answers[i];
      let scoreInd = questions[i].answers[answerInd][1] as number;
      totalScore[scoreInd] += 1;
    }
    let max = totalScore.indexOf(Math.max(...totalScore));
    if (max === 0) {
      return "Pheasant";
    } else if (max === 1) {
      return "Pangolin";
    } else if (max === 2) {
      return "Deer";
    } else {
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
      "Oh my, the time is drawing near to depart for TSA's GBM! How early will you leave?",
    image: first,
    answers: [
      ["I have to leave early, who knows if I might get lost!", 0],
      ["I'll calculate to be just on time. There's no need to be early.", 1],
      ["I'll take my time—it’s not that deep.", 2],
      ["Meh, I'll go Whenever I feel like it.", 3],
    ],
  },

  // question 2
  {
    question:
      "Oops, before you leave, you have to choose a fit! What are you going to wear?",
    image: second,
    answers: [
      ["I'll wear something cute! I gotta doll up :3", 0],
      ["Just a calm luh fit you feel. You know I'll ptso tsts", 3],
      [
        "Something professional, you never know what connections I can make.",
        1,
      ],
      ["I'll just throw something on...I dont gaf :p", 2],
    ],
  },

  // question 3
  {
    question:
      "Now that you're finally ready for you journey ahead, how are you going to get there?",
    image: third,
    answers: [
      ["I gotta get my steps in, so I'll walk", 2],
      ["I'll bus, I paid those comprehensive fees after all!", 1],
      ["Mmmm I'll Uber. I don't want any plebs in my area.", 0],
      ["Veo…", 3],
    ],
  },

  // question 4
  {
    question:
      "You get to the entrance of Newcomb, but you spot someone with their backpack open! What will you do?",
    image: fourth,
    answers: [
      ["Walk ahead and pretend I don’t see. That's none of my business...", 0],
      ["Laugh, that’s embarrassing LOL", 3],
      ["I have to tell them, I can’t do them like that!", 2],
      [
        "Try to zip it back up…but that backfires and they notice...(how awkward >o<)",
        1,
      ],
    ],
  },

  // question 5
  {
    question:
      "You finally arrive at Newcomb Ballroom (yippee!!!) Once you open the doors to the Ballroom, what do you do?",
    image: fifth,
    answers: [
      [
        "Sit down right away. I must give Exec and Oboard my full attention!",
        0,
      ],
      [
        "I'l wait for my friends! I want to sit next to them and yap about the exciting new things TSA has to offer!",
        1,
      ],
      ["My phone is calling my name...", 3],
      [
        "Talk to the first person I see, this is the perfect time to meet new people!",
        2,
      ],
    ],
  },

  // question 6
  {
    question:
      "Wow! TSA's wonderful Culinary Chairs have prepared some delicious looking FREE boba!! What boba flavor are you getting?",
    image: sixth,
    answers: [
      ["Thai Tea, something rich and sweet will hit the spot right now!", 2],
      [
        "Mango Green Tea, a refreshing beverage is much needed after my busy day today.",
        1,
      ],
      ["Water please! I'm not really into boba.", 0],
      ["Nothing. Let me dehydrate in peace.", 3],
    ],
  },

  // question 7
  {
    question:
      "Though it's sad to say, this spectacular and magnificent GBM has come to an end. The GBM might be over, but the night is still young! What will you do now?",
    image: seventh,
    answers: [
      [
        "Let's roll pickleball!! It's time to show TSA what I've got!.",
        1,
      ],
      [
        "Yap with the people. I have to catch up with my friends, it's been so long since I've seen them!",
        2,
      ],
      [
        "I lowkey want to explore Newcomb Ballroom, what secrets lie in this building?",
        3,
      ],
      ["I'm gonna go straight home. Today drained me >.<", 0],
    ],
  },
];

export default Quiz;
