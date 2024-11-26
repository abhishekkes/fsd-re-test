import "./Result.css";
function Result({ score }) {
  return (
    <div className="result">
      <div className="disp">
        <h2>Awesome !</h2>
        <p>Your Score is : {score} out of 50</p>
      </div>
    </div>
  );
}

export default Result;
