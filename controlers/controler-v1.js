function renderBlog(req, res) {
    console.log(blog)
    res.render("blog-list", {blog: blog})
}
module.exports = {
    renderBlog,
}