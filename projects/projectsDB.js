const db = require("../data/db-config")

module.exports = {
    getProjects,
    getResources,
    getTasks,
    getProjectById,
    getTasksById,
    getResourceById,
    addProject,
    addResource,
    addTask,
    // update,
    // remove
}

function getProjects(){
    return db("projects")
}

function getResources(id){
    return db("resource")
    .join("projects", "projects.id", "=", "resources.projects_id")
    .join("resources", "resource.id", "=", "resources.resource_id")
    .select("projects.name", "resource.name", "resource.description")
    .where({"projects.id": id})
}

function getTasks(id){
    return db("tasks")
    .join("projects", "projects.id", "=", "tasks.projects_id")
    .select("projects.name", "projects.description", "tasks.*")
    .where({"projects.id": id})
}

function getProjectById (id) {
    return db("projects")
    .where({id})
    .first()
}

function getTasksById (id) {
    return db("tasks")
    .where({id})
    .first()
}

function getResourceById (id) {
    return db("resource")
    .where({id})
    .first()
}

function addProject(project){
    return db("projects")
    .insert(project, "id")
    .then(ids => {
        const id = ids[0]
        return getProjectById(id)
    })
}

function addTask(task){
    return db("tasks")
    .insert(task, "id")
    .then(ids => {
        const id = ids[0]
        return getTasksById(id)
    })
}

function addResource(resource){
    return db("resource")
    .insert(resource, "id")
    .then(ids => {
        const id = ids[0]
        return getResourceById(id)
    })
}