const db = require("../../data/dbConfig.js");

module.exports = {
  get,
  insert,
};

function get() {
  return db("tasks as t")
    .join("projects as p", "t.project_id", "p.project_id")
    .select(
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description",
    )
    .then(task => task.map(task =>
      ({ ...task, task_completed: task.task_completed ? true : false })
    ));
}

function insert(task) {
  return db("tasks")
    .insert(task, "task_id")
    .then(([task_id]) => db("tasks").where({ task_id }))
    .then(([task]) => ({ ...task, task_completed: task.task_completed ? true : false }));
}
