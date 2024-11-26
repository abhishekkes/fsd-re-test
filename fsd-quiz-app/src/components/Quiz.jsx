import { useState } from "react";
import Question from "./Question";
import Result from "./Result";

const questions = [
  {
    question: "What is the capital of India?",
    options: ["Lucknow", "Delhi", "Noida", "Ghaziabad"],
    correctAnswer: "Delhi",
  },
  {
    question: "Where is Mahakumbh organized this year 2024-2025?",
    options: ["Prayagraj", "Lucknow", "Delhi", "Ghaziabad"],
    correctAnswer: "Prayagraj",
  },
  {
    question: "Which shape has opposite sides equal",
    options: ["triangle", "rectangle", "square", "circle"],
    correctAnswer: "rectangle",
  },
  {
    question: "Where is Zero Road Situated",
    options: ["Prayagraj", "Lucknow", "Delhi", "Ghaziabad"],
    correctAnswer: "Prayagraj",
  },
  {
    question: "Where is Qutub Minar ",
    options: ["Prayagraj", "Lucknow", "Delhi", "Ghaziabad"],
    correctAnswer: "Delhi",
  },
  {
    question: "Which city is called nawabo ka shehar",
    options: ["Prayagraj", "Lucknow", "Delhi", "Ghaziabad"],
    correctAnswer: "Lucknow",
  },
  {
    question: "Where is Lal Quila Situated?",
    options: ["Prayagraj", "Lucknow", "Delhi", "Ghaziabad"],
    correctAnswer: "Delhi",
  },
  {
    question: "Where is Sangam Situated?",
    options: ["Prayagraj", "Lucknow", "Delhi", "Ghaziabad"],
    correctAnswer: "Prayagraj",
  },
  {
    question: "Where is Bhul Bhulaiya Situated?",
    options: ["Prayagraj", "Lucknow", "Delhi", "Ghaziabad"],
    correctAnswer: "Lucknow",
  },
  {
    question: "Where is Qutub Minar Situated",
    options: ["Prayagraj", "Lucknow", "Delhi", "Ghaziabad"],
    correctAnswer: "Delhi",
  },
];

function Quiz({ contestantName }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedOption) => {
    const isCorrect =
      questions[currentQuestion].correctAnswer === selectedOption;

    if (isCorrect) setScore(score + 5);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(null);
    }
  };

  if (currentQuestion === null) {
    return <Result score={score} />;
  }

  return (
    <div className="quiz">
      <h2>Contestant: {contestantName}</h2>
      <h1>Your Current Score is {score}</h1>
      <Question
        questionData={questions[currentQuestion]}
        onAnswer={handleAnswer}
      />
    </div>
  );
}

export default Quiz;
