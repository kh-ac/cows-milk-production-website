const get404Page = (req, res) => {
  res.status(404).render("404");
};

module.exports = get404Page;
