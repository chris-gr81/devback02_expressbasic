import express from "express";
import { getCommentsByUserId, getUserById } from "./routes/user/user.service";
import router from "./routes/router";
import path from "path";

const app = express();
app.use(express.json());
app.use("/api", router);

app.use("/static", express.static(path.join(__dirname, "../public")));

const port = process.env.port || 3000;

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
