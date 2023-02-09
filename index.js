const express = require("express");
const app = express();
const PORT = 8080;
const chatApi = require("./routes/chatApiRoute");
const multer = require("multer");
const upload = multer();
app.use(express.urlencoded({ extended: true }));
app.use(upload.any());
app.use("/", chatApi);
app.listen(PORT, () => {
  console.log(`port listening at ${PORT}`);
});
