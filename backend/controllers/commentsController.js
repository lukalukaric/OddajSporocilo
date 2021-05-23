var CommentsModel = require('../models/commentsModel.js');

/**
 * commentsController.js
 *
 * @description :: Server-side logic for managing commentss.
 */
module.exports = {

    /**
     * commentsController.list()
     */
    list: function (req, res) {
        CommentsModel.find(function (err, commentss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting comments.',
                    error: err
                });
            }

            return res.json(commentss);
        });
    },

    /**
     * commentsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        CommentsModel.findOne({_id: id}, function (err, comments) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting comments.',
                    error: err
                });
            }

            if (!comments) {
                return res.status(404).json({
                    message: 'No such comments'
                });
            }

            return res.json(comments);
        });
    },

    /**
     * commentsController.create()
     */
    create: function (req, res) {
        var comments = new CommentsModel({
            comment: req.body.comment,
            username: req.body.username,
            idMessage: req.body.idMessage
        });

        comments.save(function (err, comments) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating comments',
                    error: err
                });
            }

            return res.status(201).json(comments);
        });
    },

    /**
     * commentsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        CommentsModel.findOne({_id: id}, function (err, comments) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting comments',
                    error: err
                });
            }

            if (!comments) {
                return res.status(404).json({
                    message: 'No such comments'
                });
            }

            comments.comment = req.body.comment ? req.body.comment : comments.comment;
			comments.username = req.body.username ? req.body.username : comments.username;
			
            comments.save(function (err, comments) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating comments.',
                        error: err
                    });
                }

                return res.json(comments);
            });
        });
    },

    /**
     * commentsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        CommentsModel.findByIdAndRemove(id, function (err, comments) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the comments.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
