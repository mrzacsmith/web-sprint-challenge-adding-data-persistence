const router = require('express').Router();
const Project = require('./model');

router.get('/', (req, res, next) => {
  Project.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  const project = req.body;

  if (project.project_name) {
    Project.insert(project)
      .then(inserted => {
        res.status(201).json(inserted);
      })
      .catch(next);
  } else {
    next({ status: 400, message: 'Please provide a name for the project' })
  }
});

module.exports = router;
