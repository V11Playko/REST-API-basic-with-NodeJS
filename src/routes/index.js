const { Router } = require('express');
const router = Router();

//routes
router.get('/', (req, res) => {
    res.send('Hello World');
});


module.exports = router;