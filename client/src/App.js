import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Login from "./Pages/LoginPage";
import MainPage from "./Pages/MainPage";
import "./App.css";
import QuestionDetail from "./Pages/QuestionDetail";
import QuestionCreator from "./Pages/QuestionCreator";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route
          exact
          path="/question/:id"
          render={({ match }) => (
            <QuestionDetail idQuestion={match.params.id} />
          )}
        />
        <Route exact path="/question/create" element={<QuestionCreator/>}/>
      </Routes>
    </div>
  );
}

export default App;