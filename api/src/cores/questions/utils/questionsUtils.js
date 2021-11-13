const { Question, Op } = require("../../../db/postgres/db");

const getquestions = async (req, res) => {
  const { questionName } = req.query;
  try {
    if (questionName) {
      const allQuestionsByName = await Question.findAll({
        where: {
          questionName: {
            [Op.ilike]: `%${questionName}%`,
          },
        },
      });
      res.json(allQuestionsByName);
    }
    const allQuestions = await Question.findAll();
    res.json(allQuestions);
  } catch (error) {
    res.status(404).json({
      error: `An error when you tried to obtain the question(s) is: ${error}`,
    });
  }
};
const postQuestions = async (req, res) => {
  const user = req.user;
  const { questionName, questionCategory, questionDescription } = req.body;
  try {
    const newQuestion = await Question.create({
      questionName,
      questionCategory,
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

const getQuestionById=async(req,res)=>{
  const { id } = req.params
  try{
    const questionFinded = await Question.findByPk(id)
    res.json(questionFinded)
  }catch(error){
    res.status(401).json({error:`An error has ocurred when try to get the question by id, this is the error: ${error}`})
  }
}

module.exports = {
  getquestions,
  postQuestions,
  getQuestionById
};
