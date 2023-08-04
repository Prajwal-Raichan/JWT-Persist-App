const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

module.exports = router;