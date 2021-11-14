import { Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Login from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";
import "./App.css";
import QuestionDetail from "./Pages/QuestionDetail";
import QuestionCreator from "./Pages/QuestionCreator";
import QuestionsUser from "./Pages/QuestionsUser";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/question/create" element={<QuestionCreator />} />
        <Route exact path="/questions" element={<QuestionsUser />} />
        <Route path="/questions/detail/:id" element={<QuestionDetail />} />
      </Routes>
    </div>
  );
}

export default App;
