"use strict";

const Comment = require("../models/modelComment");

class DataService {

    getComments() {
        return new Promise((resolve, reject) => {
            Comment.find({}).exec((err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            });
        })
    }

    getComment(commentId) {
        return new Promise((resolve, reject) => {
            Comment.findById(commentId, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            });
        })
    }

    addLikeComment(commentId) {
        return new Promise((resolve, reject) => {
            Comment.findByIdAndUpdate(commentId, { $inc: { likes: 1 } }, { new: true }, (err, comment) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(comment)
                }
            });
        })
    }

    addComment(body) {
        return new Promise((resolve, reject) => {
            const newComment = new Comment();
            newComment.body = body;
            newComment.save((err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    }

    deletComment(commentId) {
        return new Promise((resolve, reject) => {
            Comment.findByIdAndDelete(commentId, (err, msg) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(msg);
                };
            });
        })
    }

    updateComment(commentId, body) {
        return new Promise((resolve, reject) => {
            Comment.findByIdAndUpdate(commentId, { body, likes: 0 }, { new: true }, (err, comment) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(comment)
                }
            });
        })
    }
}

module.exports = new DataService();