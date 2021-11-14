const { Question, Op } = require("../../../db/postgres/db");

const getquestions = async (req, res) => {
  const { questionName } = req.query;
  try {
    if (questionName) {
      const allQuestionsByName = await Question.findAll({
        where: {
          questionName: {
            [Op.like]: `%${questionName}%`,
          },
        },
        order: [["id", "DESC"]],
      });
      return res.json(allQuestionsByName);
    }
    const allQuestions = await Question.findAll({ order: [["id", "DESC"]] });
    res.json(allQuestions);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      error: `An error when you tried to obtain the question(s) is: ${error}`,
    });
  }
};

module.exports = getquestions;
