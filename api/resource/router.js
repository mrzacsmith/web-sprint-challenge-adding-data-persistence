const router = require('express').Router();
const Resource = require('./model');

router.get('/', (req, res) => {
  Resource.get()
    .then(resource => {
      res.status(200).json(resource);
    })
    .catch(error => {
      res.status(500).json({
        message: error.message,
      });
    });
});

router.post('/', (req, res) => {
  const resource = req.body;

  if (resource.resource_name) {
    Resource.insert(resource)
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
      message: 'Please provide a name for the resource',
    });
  }
});

module.exports = router;
