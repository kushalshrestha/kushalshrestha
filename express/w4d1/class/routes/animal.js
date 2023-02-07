const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("The animals page!");
});

module.exports = router;