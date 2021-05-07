const router = require('express').Router();
const Task = require('./model');

router.get('/', (req, res, next) => {
  Task.get()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  const task = req.body;

  if (task.task_description && task.project_id) {
    Task.insert(task)
      .then(inserted => {
        res.status(201).json(inserted);
      })
      .catch(next);
  } else {
    next({ status: 400, message: 'Please provide a description and a project id for the task'})
  }
});

module.exports = router;
