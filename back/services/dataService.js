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
            Comment.findOne({ id: commentId }, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            });
        })
    }

    likeComment() {
        return "OkLike"
        // return new Promise((resolve, reject) => {
        //     Comment.find({}, (err, students) => {
        //         if (err) {
        //             reject(err)
        //         } else {
        //             resolve(students.map(student => ({
        //                 _id: student._id,
        //                 first_name: student.first_name,
        //                 last_name: student.last_name,
        //                 profile_picture: student.profile_picture,
        //                 description: student.description,
        //                 email: student.email,
        //                 promo: student.promo,
        //                 job: student.job,
        //                 notes: student.notes
        //             })))
        //         }
        //     });
        // })
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
        console.log(commentId)
        console.log(body)
        return new Promise((resolve, reject) => {
            Comment.findByIdAndUpdate(commentId, { body, likes: 10 }, { new: true }, (err, comment) => {
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