const router = require('express').Router();
const Task = require('./model');

router.get('/', (req, res) => {
  Task.get()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(error => {
      res.status(500).json({
        message: error.message,
      });
    });
});

router.post('/', (req, res) => {
  const task = req.body;

  if (task.description && task.project_id) {
    Task.insert(task)
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
      message: 'Please provide a description and a project id for the task',
    });
  }
});

module.exports = router;
