import { useState } from "react";

function Question({ questionData, onAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = () => {
    onAnswer(selectedOption);
    setSelectedOption(null);
  };

  return (
    <div className="question">
      <h3>{questionData.question}</h3>
      <div className="options">
        {questionData.options.map((option, index) => (
          <button
            key={index}
            className={selectedOption === option ? "selected" : ""}
            onClick={() => setSelectedOption(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <button disabled={!selectedOption} onClick={handleSubmit}>
        Submit Answer
      </button>
    </div>
  );
}

export default Question;
