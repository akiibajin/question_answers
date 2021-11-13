export default function QuestionTemplate({questionName,questionCategory,questionDescription}) {
    return(
        <div>
            <h1>{questionName}</h1>
            <h2>{questionCategory}</h2>
            <h3>{questionDescription}</h3>
        </div>
    )
};
