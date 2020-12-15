const router = require('express').Router();
const Project = require('./model');

router.get('/', (req, res) => {
  Project.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json({
        message: error.message,
      });
    });
});

router.post('/', (req, res) => {
  const project = req.body;

  if (project.project_name) {
    Project.insert(project)
      .then(inserted => {
        res.status(201).json(inserted);
      })
      .catch(error => {
        res.status(500).json({
          message: error.message,
        });
      });
  } else {
    res.status(400).json({
      message: 'Please provide a name for the project',
    });
  }
});

module.exports = router;
