const { timeLog } = require("console");
const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require(`path`);
const metodOverride = require("method-override");

const {
  renderBlogDetail,
  renderBlogEdit,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("./controlers/controler-v1");

const {
  renderBlog,
  authLogin,
  authRegister,
} = require("./controlers/controler-v2");
const { formatDateToWIB, getRelativeTime } = require("./utils/time");
// const { blogs } = require("./controlers/controler-v1");

const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "hbs");
app.set(`views`, path.join(__dirname, "./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("assets"));
app.use(metodOverride("_method"));

hbs.registerPartials(__dirname + "/views/partials", function (err) {});
hbs.registerHelper("equal", function (a, b) {
  return a === b;
});

hbs.registerHelper("formatDateToWIB", formatDateToWIB);
hbs.registerHelper("getRelativeTime", getRelativeTime);

// ini catatan aja
// app.get("/contact-form", renderBlog);
/*app tolong ketika saya buka /blog lakukan render blog*/

// Dibawah ini bisa menggunakan render seperti yang di atas

// LOGIN
app.get("/login", (req, res) => {
  res.render("auth-login");
});

app.post("/login", authLogin);

// REGISTER
app.get("/register", (req, res) => {
  res.render("auth-register");
});

app.post("/register", authRegister);

// HALAMAN HOME
// app.get("/home", (req, res) => {
//   // res.send("Hello express! this is homepage nia");
//   res.render("index");
// });

// HALAMAN CARD
app.get("/card", (req, res) => {
  // res.send("Hello express! this is homepage nia");
  res.render("card");
});

// CONTACT ME
app.get("/contact-form", (req, res) => {
  res.render("contact-form");
});

// BLOG LIST
app.get("/blog", renderBlog);

// BLOG CREAT
app.get("/blog-creat", (req, res) => {
  res.render("blog-creat");
});

// SUBMIT NEW BLOG
app.post("/blog-creat", createBlog);

// BLOG DETAIL
app.get("/blog/:id", renderBlogDetail);

// DELET BLOG / EXITING
const methodOverride = require("method-override");
app.use(methodOverride("_method"));

app.delete("/blog/:id", deleteBlog);

// BLOG EDIT
app.get("/blog-edit/:id", renderBlogEdit);

// // BLOG SUBMIT/SAVE
// app.patch("/blog-edit/:id", updateBlog);

// PROJECT CREAT
app.get("/project-creat", (req, res) => {
  res.render("project-creat");
});

// PROJECT LIST
app.get("/project-list", (req, res) => {
  res.render("project-list");
});

// TESTIMONIALS
app.get("/testimonials", (req, res) => {
  res.render("testimonials");
});

// REQUEST PARAMS
app.get("/about:id", (req, res) => {
  const id = req.params.id;
  res.send(`halo ini halaman tentang ${id}`);
});

// // REQUEST QUERY
// app.get("/blog", (req, res) => {
//   // const title = req.query.title;
//   // const author = req.query.author;
//   // const year = req.query.year;
//   const { title, author, year } = req.query;
//   res.send(
//     `Hello express! this is homepage ${title} dengan ${author} tahun ${year}`
//   );
//   // (kita bisa menyingkat semua ini dengan cons di atas loh)
//   res.send("ok");
// });

// Supaya bisa berjalan
app.listen(port, () => {
  console.log(`My personal web app listening on port ${port} `);
});
