const { Answer, Question } = require("../../../db/postgres/db");

const getAnswers = async (req, res) => {
  const { idQuestion } = req.query;
  try {
    const allAnswers = await Answer.findAll({
      where: { questionId: Number(idQuestion) },
    });
    res.json(allAnswers);
  } catch (error) {
    res.status(401).json({
      error: `An error ocurred when trying to get the answers, this is the error: ${error}`,
    });
  }
};

module.exports = getAnswers;
