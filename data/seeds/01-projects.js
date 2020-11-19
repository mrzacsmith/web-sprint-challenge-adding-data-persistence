exports.seed = function (knex) {
  return knex('projects').insert([
    {
      name: 'Complete Challenge',
      description: 'Build an Awesome DB',
    },
  ]);
};
