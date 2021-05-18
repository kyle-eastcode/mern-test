const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Hello Server!'
  });
});

module.exports = router;