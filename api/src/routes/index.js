const router = require("express").Router();
const userRouter = require("./user/userRoutes");
const questionRouter = require("./question/questionRoutes");
const answerRouter = require("./answers/answerRoutes");

router.use("/user", userRouter);
router.use("/questions", questionRouter);
router.use("/answers", answerRouter);

router.use("*",(req, res)=>{
  res.status(404).json({ error: "page not found" });
});

module.exports = router;
