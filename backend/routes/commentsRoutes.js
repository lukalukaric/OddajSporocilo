var express = require('express');
var router = express.Router();
var commentsController = require('../controllers/commentsController.js');
var multer = require('multer');
var upload = multer({ dest: 'public/images/' });

/*
 * GET
 */
router.get('/', commentsController.list);

/*
 * GET
 */
router.get('/:id', commentsController.show);

/*
 * POST
 */
router.post('/', upload.single('slika'), commentsController.create);

/*
 * PUT
 */
router.put('/:id', commentsController.update);

/*
 * DELETE
 */
router.delete('/:id', commentsController.remove);

module.exports = router;
