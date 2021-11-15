import QuestionTemplate from "./QuestionTemplate";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
export default function QuestionsMaper({ questionsToMap }) {
  return (
    <div>
      {questionsToMap ? (
        questionsToMap.map((question) => (
          <div key={question.id}>
            <QuestionTemplate
              id={question.id}
              questionName={question.questionName}
              questionCategory={question.questionCategory}
              questionDescription={question.questionDescription}
            />
            <Link to={`/questions/detail/${question.id}`}>
              <Button color="error" variant="outlined">Learn More</Button>
            </Link>
          </div>
        ))
      ) : (
        <h1>I Can't Find any Questions</h1>
      )}
    </div>
  );
}
