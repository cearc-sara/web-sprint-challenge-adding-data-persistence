const express = require("express")

const Projects = require("./projectsDB")

const router = express.Router()

router.get("/", (req, res) => {
    Projects.getProjects()
    .then(project => {
        res.status(200).json({ projects: project })
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})

router.get("/:id/tasks", (req, res) => {
    const {id} = req.params
    Projects.getTasks(id)
    .then(project => {
        res.status(200).json({ tasks: project })
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})

router.get("/:id/resource", (req, res) => {
    const {id} = req.params
    Projects.getResources(id)
    .then(project => {
        res.status(200).json({ resources: project })
    })
    .catch(err => {
        res.status(500).json({ error: err.message })
    })
})

router.post("/", (req, res) => {
    const projectData = req.body;
  
    Projects.addProject(projectData)
    .then(project => {
      res.status(201).json({projects: project});
    })
    .catch (err => {
      res.status(500).json({ message: err.message });
    });
  });

  router.post('/:id/tasks', (req, res) => {
    const taskData = req.body;
    const { id } = req.params; 
  
    Projects.getTasksById(id)
    .then(task => {
      if (task) {
        Projects.addTask(taskData, id)
        .then(task => {
          res.status(201).json(task);
        })
      } else {
        res.status(404).json({ message: 'Could not find task with given id.' })
      }
    })
    .catch (err => {
      res.status(500).json({ message: err.message });
    });
  });

  router.post('/:id/resource', (req, res) => {
    const resourceData = req.body;
    const { id } = req.params; 
  
    Projects.getResourceById(id)
    .then(resource => {
      if (resource) {
        Projects.addResource(resourceData, id)
        .then(resource => {
          res.status(201).json(resource);
        })
      } else {
        res.status(404).json({ message: 'Could not find resource with given id.' })
      }
    })
    .catch (err => {
      res.status(500).json({ message: err.message });
    });
  });
  
module.exports =router