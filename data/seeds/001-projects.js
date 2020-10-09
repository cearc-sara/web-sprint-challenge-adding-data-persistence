
exports.seed = function(knex) {
const projects = [
  {
    name: "Portfolio",
    description: "projects completed by me",
    completed: false
  },
  {
    name: "Life of a Coder Mom",
    description: "personal webpage",
    completed: false
  },
  {
    name: "Recipes",
    description: "family recipe blog",
    completed: false
  }
]
return knex("projects").insert(projects)
};
