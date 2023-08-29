const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API' });
});

router.get('/data', (req, res) => {
    res.json({ data: [1, 2, 3, 4, 5] });
});

router.post('/echo', (req, res) => {
    const { message } = req.body;
    res.json({ echo: message });
});

module.exports = router;
