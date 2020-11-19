const db = require("../../data/dbConfig.js");

module.exports = {
  get,
  insert,
};

function get() {
  return db("projects")
    .then(pr => pr.map(pr =>
      ({ ...pr, completed: pr.completed ? true : false })
    ));
}

function insert(project) {
  return db("projects")
    .insert(project, "id")
    .then(([id]) => db("projects").where({ id }))
    .then(([proj]) => ({ ...proj, completed: proj.completed ? true : false }));
}
