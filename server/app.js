const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/userRoutes");
const blogRouter = require("./routes/blogPostRoutes");
const commentRouter = require("./routes/commentPostRoutes");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const cors = require("cors");
const path = require("path");

const app = express();
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));
app.use(express.json());
const allowedOrigins = [
  "https://blogging-seven-topaz.vercel.app",
  "https://blogging-git-main-kartikays-projects-c448a263.vercel.app",
  "https://blogging-qvlqr5dpw-kartikays-projects-c448a263.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Check if the origin is in the allowedOrigins array
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);

app.use("/api/v1/users", userRouter);
app.use("/api/v1/blogPost", blogRouter);
app.use("/api/v1/comments", commentRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`can't find${req.originalUrl} on the server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
