exports.seed = function (knex) {
  return knex('tasks').insert([
    {
      project_id: 1,
      task_description: 'Fork and Clone Repository',
      task_notes: 'This is fine',
    },
    {
      project_id: 1,
      task_description: 'Install Dependencies',
      task_notes: 'This is awesome',
    },
    {
      project_id: 1,
      task_description: 'Design and Build API Endpoints',
      task_notes: 'This is where the magic happens!',
    },
  ]);
};
