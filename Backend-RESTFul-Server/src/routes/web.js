const express = require('express'); 
const router = express.Router();

router.get('/', (req, res) => {
    //res.send('Hello nha')
    res.render('sample.ejs')
})
module.exports = router;