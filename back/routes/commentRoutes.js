'use strict'

const express = require('express');
const router = express.Router();

const commentController = require('../controllers/commentController');

router.route('/:id')
    .post(commentController.getComment)
router.route('/')
    .get(commentController.getComments)
    .post(commentController.addComment);


router.route('/like/:commentId')
    .post(commentController.likeComment)
    .delete(commentController.deletComment);

module.exports = router;