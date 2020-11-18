exports.up = function (knex) {
  return knex.schema.createTable("tasks", function (tasks) {
    tasks.increments();
    tasks.string("description", 128).notNullable();
    tasks.text("notes");
    tasks.boolean("completed").defaultTo(false);
    tasks.integer("project_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("tasks");
};
