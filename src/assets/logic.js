const questions = [
  // question 1
  {
    question: "How early will you depart",
    image: "./logo.png",
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
    image: "./logo.png",
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
    image: "./logo.png",
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
    image: "./logo.png",
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
    image: "./logo.png",
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
    image: "./logo.png",
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
    image: "./logo.png",
    answers: [
      { Volleyball: 7 },
      { "Yap with the people": 1 },
      { "Explore Newcomb Ballroom": 8 },
      { "Go straight home": 3 },
    ],
  },
];

// Score ranges for results
/*
const results = [
  { min: 0, max: 10, fam: "Pheasant" },
  { min: 11, max: 20, fam: "Pangolin" },
  { min: 21, max: 30, fam: "Deer" },
  { min: 31, max: 40, fam: "Viper" },
];
*/
const fams = {
  Pheasant: 0,
  Pangolin: 0,
  Deer: 0,
  Viper: 0,
};

// adding up scores
function getQuizResult(selectedAnswers) {
  let totalScore = 0;

  selectedAnswers.forEach((answerIndex, questionIndex) => {
    totalScore += questions[questionIndex].answers[answerIndex].score;
  });

  // result
  if (totalScore <= 10) {
    return "Pheasant";
  } else if (11 <= totalScore <= 20) {
    return "Pangolin";
  } else if (21 <= totalScore <= 30) {
    return "Deer";
  } else if (31 <= totalScore <= 40) {
    return "Viper";
  }
}
