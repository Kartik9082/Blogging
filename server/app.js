const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/userRoutes");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const app = express();
app.use(morgan("dev"));
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello World! MERN BLOGGING");
// });

app.use("/api/v1/users", userRouter);
// app.use("/api/users", require("./routes/api/users"));
// app.use("/api/auth", require("./routes/api/auth"));
// app.use("/api/posts", require("./routes/api/posts"));
// app.use("/api/profile", require("./routes/api/profile"));
// app.use("/api/comments", require("./routes/api/comments"));

app.use(globalErrorHandler);

module.exports = app;
