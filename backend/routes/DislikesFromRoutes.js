var express = require('express');
var router = express.Router();
var DislikesFromController = require('../controllers/DislikesFromController.js');

/*
 * GET
 */
router.get('/', DislikesFromController.list);

/*
 * GET
 */
router.get('/:id', DislikesFromController.show);

/*
 * POST
 */
router.post('/', DislikesFromController.create);

/*
 * PUT
 */
router.put('/:id', DislikesFromController.update);

/*
 * DELETE
 */
router.delete('/:id', DislikesFromController.remove);

module.exports = router;
