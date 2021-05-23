var MessageModel = require('../models/messageModel.js');

/**
 * messageController.js
 *
 * @description :: Server-side logic for managing messages.
 */
module.exports = {

    /**
     * messageController.list()
     */
    list: function (req, res) {
        MessageModel.find(function (err, messages) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting message.',
                    error: err
                });
            }
            return res.json(messages);
        }).sort({ time: -1 });
    },

    /**
     * messageController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        MessageModel.findOne({_id: id}, function (err, message) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting message.',
                    error: err
                });
            }

            if (!message) {
                return res.status(404).json({
                    message: 'No such message'
                });
            }

            return res.json(message);
        });
    },

    /**
     * messageController.create()
     */
    create: function (req, res) {
        var message = new MessageModel({
			text : req.body.name,
            path: 'images/' + req.file.filename,
			likes : req.body.likes,
			views : req.body.views,
            time: req.body.time,
            author: req.body.author
        });

        message.save(function (err, message) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating message',
                    error: err
                });
            }

            return res.status(201).json(message);
        });
    },

    /**
     * messageController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        MessageModel.findOne({_id: id}, function (err, message) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting message',
                    error: err
                });
            }

            if (!message) {
                return res.status(404).json({
                    message: 'No such message'
                });
            }

            message.text = req.body.text ? req.body.text : message.text;
			message.path = req.body.path ? req.body.path : message.path;
			message.likes = req.body.likes ? req.body.likes : message.likes;
			message.views = req.body.views ? req.body.views : message.views;
            message.time = req.body.time ? req.body.time : message.time;
            message.author = req.body.author ? req.body.author : message.author
			
            message.save(function (err, message) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating message.',
                        error: err
                    });
                }

                return res.json(message);
            });
        });
    },

    /**
     * messageController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        MessageModel.findByIdAndRemove(id, function (err, message) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the message.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
