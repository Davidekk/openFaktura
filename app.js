import "dotenv/config";
import express from "express";

// import routes
import router from "./router/registerRoute.js";

// import middleware
import { errorHandler } from "./middleware/error-handler.js";
import { notFound } from "./middleware/not-found.js";

const app = express();
app.use(express.json());

// use routes
app.use("/api/auth", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(errorHandler);
app.use(notFound);

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
