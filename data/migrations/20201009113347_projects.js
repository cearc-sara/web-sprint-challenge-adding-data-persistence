
exports.up = function(knex) {
  return knex.schema
  .createTable("projects", tbl => {
      tbl.increments()
      tbl.string("name")
      .notNullable()
      .unique()
      .index()
      tbl.string("description")
      tbl.boolean("completed")
      .defaultTo(false)
  })
  .createTable("tasks", tbl => {
      tbl.increments()
      tbl.string("description")
      .notNullable()
      tbl.string("notes")
      tbl.boolean("completed")
      .defaultTo(false)
      tbl.integer("projects_id")
      .unsigned()
      .references("projects.id")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE")

  })
  .createTable("resource", tbl => {
      tbl.increments()
      tbl.string("name")
      .notNullable()
      .index()
      tbl.string("description")
  })
  .createTable("resources", tbl => {
      tbl.increments()
      tbl.integer("resource_id")
      .unsigned()
      .references("resource.id")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE")
      tbl.integer("projects_id")
      .unsigned()
      .references("projects.id")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE")
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("resources")
  .dropTableIfExists("resource")
  .dropTableIfExists("tasks")
  .dropTableIfExists("projects")
};
