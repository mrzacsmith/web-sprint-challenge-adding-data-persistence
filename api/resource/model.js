const db = require("../../data/dbConfig.js");

module.exports = {
  get,
  insert,
};

function get() {
  return db("resources")
}

function insert(resource) {
  return db("resources")
    .insert(resource, "id")
    .then(([id]) => db("resources").where({ id }).first());
}
