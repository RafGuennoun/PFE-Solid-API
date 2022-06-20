const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    console.log("Route : /setLocation");
    res.send("Route : /setLocation")
});


module.exports = router;