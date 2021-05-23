var express = require('express');
var router = express.Router();
var messageController = require('../controllers/messageController.js');
var multer = require('multer');
var upload = multer({ dest: 'public/images/' });

/*
 * GET
 */
router.get('/', messageController.list);

/*
 * GET
 */
router.get('/:id', messageController.show);

/*
 * POST
 */
router.post('/', upload.single('slika'), messageController.create);

/*
 * PUT
 */
router.put('/:id', messageController.update);

/*
 * DELETE
 */
router.delete('/:id', messageController.remove);

module.exports = router;
