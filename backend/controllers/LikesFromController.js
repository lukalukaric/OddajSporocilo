var LikesfromModel = require('../models/LikesFromModel.js');

/**
 * LikesFromController.js
 *
 * @description :: Server-side logic for managing LikesFroms.
 */
module.exports = {

    /**
     * LikesFromController.list()
     */
    list: function (req, res) {
        LikesfromModel.find(function (err, LikesFroms) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting LikesFrom.',
                    error: err
                });
            }

            return res.json(LikesFroms);
        });
    },

    /**
     * LikesFromController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        LikesfromModel.findOne({messageId: id}, function (err, LikesFrom) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting LikesFrom.',
                    error: err
                });
            }

            if (!LikesFrom) {
                return res.status(404).json({
                    message: 'No such LikesFrom'
                });
            }

            return res.json(LikesFrom);
        });
    },

    /**
     * LikesFromController.create()
     */
    create: function (req, res) {
        var LikesFrom = new LikesfromModel({
			username : req.body.username,
			messageId : req.body.messageId
        });

        LikesFrom.save(function (err, LikesFrom) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating LikesFrom',
                    error: err
                });
            }

            return res.status(201).json(LikesFrom);
        });
    },

    /**
     * LikesFromController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        LikesfromModel.findOne({_id: id}, function (err, LikesFrom) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting LikesFrom',
                    error: err
                });
            }

            if (!LikesFrom) {
                return res.status(404).json({
                    message: 'No such LikesFrom'
                });
            }

            LikesFrom.username = req.body.username ? req.body.username : LikesFrom.username;
			LikesFrom.messageId = req.body.messageId ? req.body.messageId : LikesFrom.messageId;
			
            LikesFrom.save(function (err, LikesFrom) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating LikesFrom.',
                        error: err
                    });
                }

                return res.json(LikesFrom);
            });
        });
    },

    /**
     * LikesFromController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        LikesfromModel.findByIdAndRemove(id, function (err, LikesFrom) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the LikesFrom.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
