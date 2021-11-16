const app = require("./app");
const { db } = require("./db/postgres/db");

const init = async () => {
  await db.sync().then(async () => {
    console.log("database connected");
    app.listen(3001);
  });
  console.log("server on port 3001");
};

init();
