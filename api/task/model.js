const db = require("../../data/dbConfig.js");

module.exports = {
  get,
  insert,
};

function get() {
  return db("tasks as t")
    .join("projects as p", "t.project_id", "p.id")
    .select(
      "t.description",
      "t.notes",
      "t.completed",
      "p.name as project_name",
      "p.description as project_description",
    )
    .then(task => task.map(task =>
      ({ ...task, completed: task.completed ? true : false })
    ));
}

function insert(task) {
  return db("tasks")
    .insert(task, "id")
    .then(([id]) => db("tasks").where({ id }).first());
}
