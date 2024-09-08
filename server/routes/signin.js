const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
    res.send('Signin Page');
});

module.exports = router;