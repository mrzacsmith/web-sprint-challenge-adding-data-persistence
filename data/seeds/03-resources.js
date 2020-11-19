exports.seed = function (knex) {
  return knex('resources').insert([
    {
      name: 'Car',
      description: 'It is a nice car',
    },
    {
      name: 'Truck',
      description: 'It is a nice truck',
    },
    {
      name: 'Airplane',
      description: 'It is a nice plane',
    },
  ]);
};
