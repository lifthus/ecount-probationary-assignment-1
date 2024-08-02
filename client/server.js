import express from "express";

const app = express();
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.redirect("/index.html")
});

app.listen(4000, () => {
  console.log("sever open")
})