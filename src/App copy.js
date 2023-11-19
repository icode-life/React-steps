import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
 

function App() {
  const [step, setStep] = useState(1);  
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {if (step > 1) setStep((s) => s - 1)};
  const handleNext = () => {if (step < 3) setStep((s) => s + 1)};

  return (
    <> {/**here is a React fragment this allows us to return only one component as it should be without adding a useless div. the fragment disappears from the dom once rendered */}
      <button className="close" onClick={() => setIsOpen((open) => !open)}>&times;</button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">Step {step}: {messages[step - 1]}</p>
          <div className="buttons">
            <button style={{backgroundColor: "#7950f2", color: "#fff"}} onClick={handlePrevious}>Previous</button>
            <button style={{backgroundColor: "#7950f2", color: "#fff"}} onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
