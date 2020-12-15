exports.up = function (knex) {
  return knex.schema.createTable('tasks', function (tasks) {
    tasks.increments('task_id');
    tasks.string('task_description', 128).notNullable();
    tasks.text('task_notes');
    tasks.boolean('task_completed').notNullable().defaultTo(false);
    tasks.integer('project_id')
      .unsigned()
      .notNullable()
      .references('project_id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('tasks');
};
