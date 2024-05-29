const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

// Function to ensure directory exists
const ensureDirectoryExists = (directoryPath) => {
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
    console.log(`Directory created at ${directoryPath}`);
  } else {
    console.log(`Directory already exists at ${directoryPath}`);
  }
};

// Paths for user-image and blog-image directories
const userImagePath = path.join(__dirname, "public/user-image");
const blogImagePath = path.join(__dirname, "public/blog-image");

// Ensure both directories exist
ensureDirectoryExists(userImagePath);
ensureDirectoryExists(blogImagePath);

dotenv.config({ path: "./config.env" });

const app = require("./app");

const DB = process.env.DATABASE;

mongoose.connect(DB, {}).then(() => {
  console.log("DB connection established successfully");
});

const port = process.env.PORT || 6001;
const server = app.listen(port, () => {
  console.log(`App is running on port ${port} 🚀`);
});
