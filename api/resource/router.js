const router = require('express').Router();
const Resource = require('./model');

router.get('/', (req, res, next) => {
  Resource.get()
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  const resource = req.body;

  if (resource.resource_name) {
    Resource.insert(resource)
      .then(inserted => {
        res.status(201).json(inserted);
      })
      .catch(next);
  } else {
    next({ status: 400, message: 'Please provide a name for the resource' })
  }
});

module.exports = router;
