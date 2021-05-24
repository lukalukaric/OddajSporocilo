var express = require('express');
var router = express.Router();
var LikesFromController = require('../controllers/LikesFromController.js');

/*
 * GET
 */
router.get('/', LikesFromController.list);

/*
 * GET
 */
router.get('/:id', LikesFromController.show);

/*
 * POST
 */
router.post('/', LikesFromController.create);

/*
 * PUT
 */
router.put('/:id', LikesFromController.update);

/*
 * DELETE
 */
router.delete('/:id', LikesFromController.remove);

module.exports = router;
