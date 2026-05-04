import React, { useMemo, useState } from "react";
// import "./quiz.css";

export default function QuizSexualHealth() {
  // 1) Questions data
  const questions = useMemo(
    () => [
      {
        id: "goal",
        title: "What best describes what you want help with?",
        options: [
          "Erectile dysfunction (difficulty getting/keeping an erection)",
          "Low libido (reduced sex drive)",
          "Performance confidence / anxiety",
          "Not sure — I just want to talk to a provider",
        ],
      },
      {
        id: "timeline",
        title: "How long have you been experiencing this?",
        options: [
          "Less than 1 month",
          "1–6 months",
          "6–12 months",
          "More than 1 year",
        ],
      },
      {
        id: "frequency",
        title: "How often does it affect you?",
        options: [
          "Occasionally",
          "About half the time",
          "Most of the time",
          "Almost always",
        ],
      },
    ],
    []
  );

  // 2) State
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({}); // { goal: "...", timeline: "...", frequency: "..." }

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
        <br />
        <br />
        <br />
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