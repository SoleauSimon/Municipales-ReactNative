"use strict";

const DataService = require('../services/dataService');

exports.getComments = async (req, res) => {
    try {
        let comments = await DataService.getComments();
        res.status(200).send(comments);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getComment = async (req, res) => {
    try {
        let comment = await DataService.getComment(req.body.id);
        res.status(200).send(comment);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.addLikeComment = async (req, res) => {
    try {
        let newLike = await DataService.addLikeComment(req.body.id);
        res.status(200).send(newLike);
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.deletComment = async (req, res) => {
    try {
        let comment = await DataService.deletComment(req.body.id);
        res.status(200).send(comment)
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.addComment = async (req, res) => {
    console.log(req.body.body)
    try {
        let newComment = await DataService.addComment(req.body.body);
        res.status(200).send(newComment);
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.updateComment = async (req, res) => {
    try {
        let newComment = await DataService.updateComment(req.body.id, req.body.body);
        res.status(200).send(newComment);
    } catch (error) {
        res.status(500).send(error)
    }
}