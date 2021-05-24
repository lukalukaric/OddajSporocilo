var DislikesfromModel = require('../models/DislikesFromModel.js');

/**
 * DislikesFromController.js
 *
 * @description :: Server-side logic for managing DislikesFroms.
 */
module.exports = {

    /**
     * DislikesFromController.list()
     */
    list: function (req, res) {
        DislikesfromModel.find(function (err, DislikesFroms) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting DislikesFrom.',
                    error: err
                });
            }

            return res.json(DislikesFroms);
        });
    },

    /**
     * DislikesFromController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        DislikesfromModel.findOne({messageId: id}, function (err, DislikesFrom) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting DislikesFrom.',
                    error: err
                });
            }

            if (!DislikesFrom) {
                return res.status(404).json({
                    message: 'No such DislikesFrom'
                });
            }

            return res.json(DislikesFrom);
        });
    },

    /**
     * DislikesFromController.create()
     */
    create: function (req, res) {
        var DislikesFrom = new DislikesfromModel({
			username : req.body.username,
			messageId : req.body.messageId
        });

        DislikesFrom.save(function (err, DislikesFrom) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating DislikesFrom',
                    error: err
                });
            }

            return res.status(201).json(DislikesFrom);
        });
    },

    /**
     * DislikesFromController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        DislikesfromModel.findOne({_id: id}, function (err, DislikesFrom) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting DislikesFrom',
                    error: err
                });
            }

            if (!DislikesFrom) {
                return res.status(404).json({
                    message: 'No such DislikesFrom'
                });
            }

            DislikesFrom.username = req.body.username ? req.body.username : DislikesFrom.username;
			DislikesFrom.messageId = req.body.messageId ? req.body.messageId : DislikesFrom.messageId;
			
            DislikesFrom.save(function (err, DislikesFrom) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating DislikesFrom.',
                        error: err
                    });
                }

                return res.json(DislikesFrom);
            });
        });
    },

    /**
     * DislikesFromController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        DislikesfromModel.findByIdAndRemove(id, function (err, DislikesFrom) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the DislikesFrom.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
