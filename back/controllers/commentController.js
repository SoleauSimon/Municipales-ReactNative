"use strict";

const DataService = require('../services/dataService');

exports.getComments = async (req, res) => {
    console.log("prout")
    try {
        let students = await DataService.getComments();
        res.status(200).send(students);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getComment = async (req, res) => {
    console.log("getComment")

    // if (!req.cookies || !req.cookies['x-auth-token']) {
    //     res.status(204).send()
    // }
    // try {
    //     const user = getDataFromToken(req.cookies['x-auth-token'])
    //     let student = await DataService.getStudentById(user._id);
    //     res.status(200).send(student);
    // } catch (error) {
    //     res.clearCookie('x-auth-token')
    //     res.status(404).send(error);
    // }
}

exports.likeComment = async (req, res) => {
    console.log("likeComment")

    // const { student_id } = req.params;
    // try {
    //     let student = await DataService.getStudentById(student_id);
    //     res.status(200).send(student);
    // } catch (error) {
    //     res.status(500).send(error);
    // }
}

exports.deletComment = async (req, res) => {
    console.log("deletComment")

    // const { profile_picture, first_name, last_name, description, email, password, promo, job } = req.body;
    // try {
    //     let student = await DataService.createStudent(profile_picture, first_name, last_name, description, email, password, promo, job);
    //     res.status(200).send(student)
    // } catch (error) {
    //     res.status(500).send(error)
    // }
}

exports.addComment = async (req, res) => {
    try {
        let newComment = await DataService.addComment(req.body.body);
        res.status(200).send(newComment);
    } catch (error) {
        res.status(500).send(error)
    }
}