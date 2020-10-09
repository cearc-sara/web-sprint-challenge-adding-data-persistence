
exports.seed = function(knex) {
  const resources = [
    {
      projects_id: 1,
      resource_id: 1
    },
    {
      projects_id: 2,
      resource_id: 3
    },
    {
      projects_id: 3,
      resource_id: 2
    }
  ]
  return knex("resources").insert(resources)
};
