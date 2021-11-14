const { Question } = require("../../../db/postgres/db");

const getQuestionById = async (req, res) => {
  const { id } = req.params;
  try {
    const questionFinded = await Question.findByPk(id);
    res.json(questionFinded);
  } catch (error) {
    res
      .status(401)
      .json({
        error: `An error has ocurred when try to get the question by id, this is the error: ${error}`,
      });
  }
};

module.exports = getQuestionById;
