import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WeightLoss from "./pages/WeightLoss";
import HairLoss from "./pages/HairLoss";
import Labs from "./pages/Labs";
import QuizPage from "./pages/QuizPage";
import QuizHair from "./pages/QuizHair";
import QuizSexual from "./pages/QuizSexual";
import SexualHealth from "./pages/SexualHealth"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weight-loss" element={<WeightLoss />} />
          <Route path="/hair-loss" element={<HairLoss />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/sexual-health" element={<SexualHealth />} />
          <Route path="/mental-health" element={<Home />} />
          <Route path="/skin-care" element={<Home />} />
          <Route path="/testosterone" element={<Home />} />
          <Route path="/weight-loss/quiz-page" element={  <QuizPage />}/>
          <Route path="/hair-loss/quiz-hair" element={<QuizHair />}/>
          <Route path="/sexual-health/quiz-sexual" element={<QuizSexual />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
