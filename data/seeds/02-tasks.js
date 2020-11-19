exports.seed = function (knex) {
  return knex('tasks').insert([
    {
      project_id: 1,
      description: 'Fork and Clone Repository',
      notes: 'This is fine',
    },
    {
      project_id: 1,
      description: 'Install Dependencies',
      notes: 'This is awesome',
    },
    {
      project_id: 1,
      description: 'Design and Build API Endpoints',
      notes: 'This is where the magic happens!',
    },
  ]);
};
