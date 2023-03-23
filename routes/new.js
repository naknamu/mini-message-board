const express = require('express');
const router = express.Router();

//GET form
router.get('/', (req, res) => {
    res.render('form', {title: "Send New Message"});
})

module.exports = router;