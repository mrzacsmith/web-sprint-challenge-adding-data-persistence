exports.up = function (knex) {
  return knex.schema.createTable("resources", function (resources) {
    resources.increments();
    resources.string("name", 128).unique().notNullable();
    resources.text("description");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("resources");
};
