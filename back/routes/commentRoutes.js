'use strict'

const express = require('express');
const router = express.Router();

const commentController = require('../controllers/commentController');

router.route('/comment/delete')
    .post(commentController.deletComment);

router.route('/comment/update')
    .post(commentController.updateComment);

router.route('/comment')
    .post(commentController.getComment)
    .get(commentController.deletComment);

router.route('/comments')
    .get(commentController.getComments)
    .post(commentController.addComment);

router.route('/like/:commentId')
    .post(commentController.likeComment)
// .delete(commentController.deletComment);

module.exports = router;