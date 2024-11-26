import React, { useState } from "react";
import Quiz from "./components/Quiz";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [startQuiz, setStartQuiz] = useState(false);
  const [error, setError] = useState(false);

  const handleStart = () => {
    if (name == "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      setError(false);
      setStartQuiz(true);
    }
  };

  return (
    <div className="app">
      {!startQuiz ? (
        <div className="start-screen">
          <h1>ABES Quiz Platform</h1>
          <input
            type="text"
            placeholder="Please Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={error ? "error" : ""}
          />
          <button onClick={handleStart}>Start Quiz</button>
        </div>
      ) : (
        <Quiz contestantName={name} />
      )}
    </div>
  );
}

export default App;
