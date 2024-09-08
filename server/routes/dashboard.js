const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
    res.send('Dashboard Page');
});

module.exports = router;
