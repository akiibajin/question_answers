const { Question } = require("../../../db/postgres/db");

const postQuestions = async (req, res) => {
  const user = req.user;
  const { questionName, questionCategory, questionDescription } = req.body;
  try {
    const newQuestion = await Question.create({
      questionName,
      questionCategory: questionCategory.value,
      questionDescription,
    });
    await user.addQuestions(newQuestion);
    res.json({ message: "success" });
  } catch (error) {
    res.status(404).json({
      error: `An error ocurred when ${user.name} tried to make a new question, the error is: ${error}`,
    });
  }
};

module.exports = postQuestions;
