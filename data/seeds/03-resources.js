exports.seed = function (knex) {
  return knex('resources').insert([
    {
      resource_name: 'Car',
      resource_description: 'It is a nice car',
    },
    {
      resource_name: 'Truck',
      resource_description: 'It is a nice truck',
    },
    {
      resource_name: 'Airplane',
      resource_description: 'It is a nice plane',
    },
  ]);
};
