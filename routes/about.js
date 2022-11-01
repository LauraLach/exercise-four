const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
});

router.get('/', (req, res) => {
    res.send('<div><h1>About page</h1></div>')
  });

router.get('/me', (req, res) => {
    res.send([
        {
            "id": "me",
            "name": "Laura",
            "message": "Hello"
        },
        {
            "id": "not-me",
            "name": "SomeoneElse",
            "message": "Bye"
        }
    ]);
});

  module.exports = router;