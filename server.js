const { timeLog } = require("console");
const express = require("express");
const app = express();
const port = 3000;
const hbs = require("hbs");
const path = require(`path`);

const{formatDateToWIB, getRelativeTime} = require ("./utils/time")


app.set("view engine", "hbs");
app.set(`views`, path.join(__dirname, "./views"));

app.use(express.json());
app.use(express.urlencoded( {extended: true}));
app.use(express.static("assets"));


hbs.registerPartials(__dirname + "/views/partials", function (err) {});
hbs.registerHelper('equal', function (a, b) {
  return a===b;
});
hbs.registerHelper("formatDateToWIB", formatDateToWIB);
hbs.registerHelper("getRelativeTime", getRelativeTime);
let blogs = [];

// HALAMAN HOME
app.get("/home", (req, res) => {
  // res.send("Hello express! this is homepage");
  res.render("index");
});

// CONTACT ME
app.get("/contact-form", (req, res) => {
  res.render("contact-form");
});

// BLOG LIST
app.get("/blog", (req, res) => {
  console.log(blogs);
  res.render("blog-list", {blogs: blogs});
});

// BLOG CREAT
app.get("/blog-creat", (req, res) => {
  res.render("blog-creat");
});

// // CREAT BLOG PAGE
// app.get("/blog-creat", (req, res) => {
//   res.render("blog-creat");
// });

// SUMMIT NEW BLOG
app.post("/blog-creat", (req, res) => {
  // const title = req.body.title;
  // const content = req.res.content;
  // const image = req.res.image;

  const { title, content } = req.body ;
  console.log("judulnya :",title);
  console.log("contennyanya :",content);

  let image = "https://picsum.photos/300/200";

  let newBlog = {
    title: title,
    content: content,
    image: image,
    author: "Septania Nopa",
    postedAt: new Date(),
  };

  blogs.push(newBlog);

    res.redirect("/blog");
});

// BLOG DETAIL
app.get("/blog/:id", (req, res) => {
  res.render("blog-detail");
});

// TESTIMONIALS
app.get("/testimonials", (req, res) => {
  res.render("testimonials");
});

// REQUEST PARAMS
app.get("/about/:id", (req, res) => {
  const id = req.params.id;
  res.send(`halo ini halaman tentang ${id}`);
});

// REQUEST QUERY
app.get("/blog", (req, res) => {
  // const title = req.query.title;
  // const author = req.query.author;
  // const year = req.query.year;
  const { title, author, year } = req.query;
  res.send(
    `Hello express! this is homepage ${title} dengan ${author} tahun ${year}`
  );
  // (kita bisa menyingkat semua ini dengan cons di atas loh)
  res.send("ok");
});

app.listen(port, () => {
  console.log(`My personal web app listening on port ${port} `);
});
