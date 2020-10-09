
exports.seed = function(knex) {
  const resource = [
    {
      name:"computer",
      description: "used for keeping up to date on projects"
    },
    {
      name:"paper and pen",
      description: "items for writing recipes down"
    },
    {
      name:"laptop",
      description: "used for updating blogs"
    }
  ]
  return knex("resource").insert(resource)
};
