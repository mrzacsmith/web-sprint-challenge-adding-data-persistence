exports.up = function (knex) {
  return knex.schema.createTable('projects', function (projects) {
    projects.increments('project_id');
    projects.string('project_name', 128).notNullable();
    projects.text('project_description');
    projects.boolean('project_completed').notNullable().defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('projects');
};
