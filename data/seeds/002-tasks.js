
exports.seed = function(knex) {
 const tasks = [
   {
     description: "add finished projects",
     notes: "working on completing projects before adding them",
     completed: false,
     projects_id: 1
   },
   {
    description: "add blogs about life as a coding mom",
    notes: "working on blogs",
    completed: false,
    projects_id: 2
  },
  {
    description: "add family recipes",
    notes: "working on adding recipes to recipe blog",
    completed: false,
    projects_id: 3
  }
 ]
 return knex("tasks").insert(tasks)
};
