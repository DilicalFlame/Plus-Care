const express = require('express');
const router = express.Router();
const { hospitals } = require('../models');

router.get('/', async (req, res) => {
    const data = await hospitals.findAll();
    res.json(data);
});

router.post('/', async (req, res) => {
    const data = await hospitals.create(req.body);
    res.json(data);
})

module.exports = router;
