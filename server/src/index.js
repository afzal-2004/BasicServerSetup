import express from "express";
const app = express();
const PORT = 3001;
const data = ["Afzal"];

app.get("/api/products", function (req, res) {
  res.send(data);
});
app.listen(PORT, () => {
  console.log(`Hii Afzal Your Port Server is running on this ${PORT}`);
});
