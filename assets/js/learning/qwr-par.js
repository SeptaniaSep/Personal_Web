// REQUEST PARAMS
app.get("/about:id", (req, res) => {
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
