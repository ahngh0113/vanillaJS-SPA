const express = require("express");

const path = require("path");

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, "..")));

const usePath = ["/", "/all", "/penguin", "/koala", "/panda"];

usePath.forEach((pathName) => {
  app.get(pathName, (req, res) => {
    res.sendFile(path.join(__dirname, "..", "index.html"));
  });
});

app.get("*", (req, res) => {
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`server open ${PORT}`);
});
