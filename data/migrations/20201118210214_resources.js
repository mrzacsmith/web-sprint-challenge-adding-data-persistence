exports.up = function (knex) {
  return knex.schema.createTable('resources', function (resources) {
    resources.increments('resource_id');
    resources.string('resource_name', 128).unique().notNullable();
    resources.text('resource_description');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('resources');
};
