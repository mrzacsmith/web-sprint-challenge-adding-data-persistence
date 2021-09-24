const db = require('../../data/dbConfig.js')

module.exports = {
  get,
  insert,
}

function get() {
  return db('resources')
}

function insert(resource) {
  return db('resources')
    .insert(resource, 'resource_id')
    .then(([resource_id]) => db('resources').where({ resource_id }).first())
}
