const express = require("express");
const app = express();
const port = 3022;

app.set("view engine", "hbs");

app.use(express.static("assets"));

// HALAMAN HOME
app.get("/", (req, res) => {
  //   res.send("Hello express! this is homepage");
  //   const persone = {
  //     firstname: "septania"
  //     lastname: "Nopa"

  //   }
  res.render("index");
});

// PARAMS
app.get("/about/:id", (req, res) => {
  const id = req.params.id;
  res.send(`halo ini halaman tentang ${id}`);
});

// REQUEST QUERY
app.get("/blog?title=javascript", (req, res) => {
  //   const title = req.query.title;
  //   const author = req.qury.author;
  //   const year = req.query.year;
  // (kita bisa menyingkat semua ini dengan cons di bawah loh)
});
//   const {title, author, year} = req.query;

res.send(
  `Hello express! this is homepage ${title} dengan ${author} tahun ${year}`
);

app.listen(port, () => {
  console.log(`My `);
});
