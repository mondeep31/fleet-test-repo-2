import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const env = process.env.ENV;

app.get("/", (req, res) => {
  console.log("request came in");
  let returnObj = {
    env: env,
    message: "",
  };
  if (env && env.length > 0) {
    returnObj.env = env;
    returnObj.message = `ENV can be read: ${env} webhook.`;
  } else {
    returnObj.message = "ENV cannot be read";
  }
  res.json(returnObj);
});

app.listen(3020, () => {
  console.log("Server is running on port 3020");
});
