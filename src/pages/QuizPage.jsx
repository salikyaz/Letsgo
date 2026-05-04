import React, { useMemo, useState } from "react";
// import "./quiz.css";

export default function QuizPage() {
  // 1) Questions data
  const questions = useMemo(
    () => [
      {
        id: "goal",
        title: "What's your weight loss goal?",
        options: ["Losing 1–15 lbs", "Losing 16–50 lbs", "Losing 51+ lbs"],
      },
      {
        id: "exercise",
        title: "What is your Current Exercise Routine?",
        options: ["No Exercise", "Light Exercise", "Moderate Exercise", "Intense Exercise"],
      },
    ],
    []
  );

  // 2) State
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({}); // { goal: "Losing 1–15 lbs", exercise: "Light Exercise" }

  const current = questions[step];
  const selectedValue = answers[current.id] || null;

  // 3) Handlers
  const handleSelect = (value) => {
    setAnswers((prev) => ({ ...prev, [current.id]: value }));
  };

  const handleNext = () => {
    if (!selectedValue) return;

    // last question => submit / console / navigate
    if (step === questions.length - 1) {
      console.log("Quiz Answers:", answers);
      alert("Quiz Completed! Check console for answers.");
      return;
    }

    setStep((s) => s + 1);
  };

  const handleBack = () => {
    if (step === 0) return;
    setStep((s) => s - 1);
  };

  return (
    <div className="quizPage">
      <div className="quizContainer">
        <br></br>
        <br></br>
        <br></br>
        <div className="brand">Lets Go Medicine</div>

        <h1 className="title">{current.title}</h1>

        <div className="options">
          {current.options.map((label) => {
            const isSelected = selectedValue === label;

            return (
              <button
                key={label}
                type="button"
                className={["optionCard", isSelected ? "selected" : ""].join(" ")}
                onClick={() => handleSelect(label)}
              >
                <span className="optionText">{label}</span>
              </button>
            );
          })}
        </div>

        {/* Footer area */}
        <div style={{ marginTop: 18, display: "flex", gap: 12, alignItems: "center" }}>
          <button
            type="button"
            onClick={handleBack}
            disabled={step === 0}
            className={["navBtn", step === 0 ? "navBtnDisabled" : ""].join(" ")}
          >
            Back
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={!selectedValue}
            className={["navBtn", !selectedValue ? "navBtnDisabled" : ""].join(" ")}
          >
            {step === questions.length - 1 ? "Finish" : "Next"}
          </button>

          <div className="hint" style={{ marginLeft: "auto" }}>
            Step {step + 1} of {questions.length}
          </div>
        </div>
      </div>
    </div>
  );
}