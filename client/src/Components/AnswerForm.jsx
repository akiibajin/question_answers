export default function AnswerForm({answerGenerator}) {
    const handleSubmit=(event)=>{
        event.preventDefault()
        answerGenerator(event.target[0].value)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <textarea placeholder="Here the answerContent"/>
                <input type="submit" value="Submit Your Answer"/>
            </form>
        </div>
    )
};
