import express from "express";
const app = express();
const PORT = 3001;

app.get("/", function (req, res) {
  res.send("Hello Server");
});
app.listen(PORT, () => {
  console.log(`Hello Afzal Your Port Server is running on this ${PORT}`);
});
