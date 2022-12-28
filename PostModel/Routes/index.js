const router = require("express").Router();

const controller  = require('../controllers/index')

router.post('/createpost',controller.createpost)
router.post('/deletepost',controller.deletepost)
router.post('/getpost',controller.getpost)
router.post('/getAllposts',controller.getAllposts)

module.exports = router;