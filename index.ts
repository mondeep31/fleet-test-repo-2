import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const env = process.env.ENV;

app.get("/", (req, res) => {
  let returnObj = {
    env: env,
    message: "",
  };
  if (env === "development") {
    returnObj.env = "development";
    returnObj.message = "ENV can be read";
  } else {
    returnObj.env = "doomed";
    returnObj.message = "ENV cannot be read";
  }
  res.json(returnObj);
});

app.listen(3020, () => {
  console.log("Server is running on port 3020");
});
