const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
    res.send('Community Page');
});

module.exports = router;
