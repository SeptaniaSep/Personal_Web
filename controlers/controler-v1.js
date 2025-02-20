const { Sequelize, QueryTypes } = require("sequelize");
const config = require("../config/config.json");

const sequelize = new Sequelize(config.development);

let blogs = [
  // {
  //   title: "Pasar Coding di Indonesia",
  //   content:
  //     "I am a teacher at a junior high school in Ponorogo Regency, East Java. And I am a fresh graduate in 2024 at a University of UMPO in Ponorogo Regency, East Java. I am a teacher at a junior high school in Ponorogo Regency, East Java. And I am a fresh graduate in 2024 at a University of UMPO in Ponorogo Regency, East Java.",
  //   image: "/images/pt5.jpg",
  //   author: "Septania Nopa Hafidzsyah",
  //   postedAt: new Date(
  //     "Fri July 21 2024 10:15:00 GMT+0700 (Western Indonesia Time)"
  //   ),
  // },
  // {
  //   title: "Pasar Coding di Indonesia ke 2",
  //   content:
  //     "I am a teacher at a junior high school in Ponorogo Regency, East Java. And I am a fresh graduate in 2024 at a University of UMPO in Ponorogo Regency, East Java. I am a teacher at a junior high school in Ponorogo Regency, East Java. And I am a fresh graduate in 2024 at a University of UMPO in Ponorogo Regency, East Java.",
  //   image: "/images/pt5.jpg",
  //   author: "Septania Nopa",
  //   postedAt: new Date(
  //     "Fri July 28 2024 10:19:00 GMT+0700 (Western Indonesia Time)"
  //   ),
  // },
];

async function renderBlog(req, res) {
  const blogs = await sequelize.query('SELECT * FROM public."Blogs"', {
    type: QueryTypes.SELECT,
  });
  // console.log(blogs); // Log the result of the query
  res.render("blog-list", { blogs: blogs });
}

async function renderBlogDetail(req, res) {
  const id = req.params.id;

  const query = `SELECT * FROM "Blogs" WHERE id = ${id}`;

  const blogYangDipilih = await sequelize.query(query, {
    type: QueryTypes.SELECT,
  });

  // const blogYangDipilih = blogs[id];
  console.log("hasil queri ini", blogYangDipilih[0]);

  res.render("blog-detail", { blog: blogYangDipilih[0] });
}

async function createBlog(req, res) {
  const { title, content } = req.body;
  console.log("judulnya :", title);
  console.log("contennyanya :", content);

  let image = "https://picsum.photos/300/200";

  let query = `INSERT INTO "Blogs" (title, content, image) 
              VALUES ('${title}', '${content}',' ${image}'
              )`;

  const newBlog = await sequelize.query(query, {
    // jalanin query seq dengan insert
    type: QueryTypes.INSERT,
  });

  // let newBlog = {
  //   title: title,
  //   content: content,
  //   image: image,
  //   author: "Septania Nopa",
  //   postedAt: new Date(),
  // };

  // blogs.push(newBlog);

  res.redirect("/blog");
}

function renderBlogEdit(req, res) {
  const id = req.params.id;
  const blogYangDipilih = blogs[id];
  // blogs.splice(id, 1);

  res.render("blog-edit", { blog: blogYangDipilih, index: id });
}

function updateBlog(req, res) {
  const id = req.params.id;
  const { title, content } = req.body;
  console.log("judul baru :", title);
  console.log("conten baru :", content);

  let image = "https://picsum.photos/300/200";

  let updatedBlog = {
    title: title,
    content: content,
    image: image,
    author: "Septania Nopa",
    postedAt: new Date(),
  };
  blogs[id] = updatedBlog;

  res.redirect("/blog");
}

async function deleteBlog(req, res) {
  const id = req.params.id;

  const query = `DELETE FROM "Blogs" WHERE id = ${id}`;

  const deleteResult = await sequelize.query(query, {
    type: QueryTypes.DELETE,
  });

  console.log("result query delete :", deleteResult);
  // blogs.splice(id, 1); //aray manipulasi => perubahan data pada array

  res.redirect("/blog");
}

module.exports = {
  // renderBlog,
  renderBlogDetail,
  renderBlogEdit,
  renderBlog,
  createBlog,
  updateBlog,
  deleteBlog,
};
