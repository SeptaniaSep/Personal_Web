const { Sequelize, BelongsTo } = require("sequelize");
const config = require("../config/config.json");
const { Blog } = require("../models");

const sequelize = new Sequelize(config.development);

async function authLogin(req, res) {}

async function authRegister(req, res) {}

async function renderBlog(req, res) {
  const blogs = await Blog.findAll();

  // console.log("hasil fetch data dari controller v2", blogs);
  res.render("blog-list", { blogs: blogs });
}

module.exports = {
  authLogin,
  authRegister,
  renderBlog,
};
