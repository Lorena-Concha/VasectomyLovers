const Comment = require("../models/comment.model");

module.exports.findAllComment = (req, res) => {
    Comment.find()
        .then((allComments) => res.json({ comments: allComments }))
        .catch((err) => res.json({ message: "Algo salio mal", error: err }))
}

module.exports.createNewComment = (req, res) => {
    Comment.create(req.body)
        .then((newComment) => res.json({ comment: newComment }))
        .catch(err => res.status(400).json(err));
}

module.exports.findOneComment = (req, res) => {
    Comment.findOne({ _id: req.params.id })
        .then((comment) => res.json({ comment: comment }))
        .catch((err) => res.json({ message: "Algo salio mal", error: err }))
}

module.exports.updateComment = (req, res) => {
    console.log(req.body)
    console.log(req.params)
    Comment.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((comment) => res.json({ comment: comment}))
        .catch((err) => res.json({ message: "Algo salio mal", error: err }))
}

module.exports.deleteComment = (req, res) => {
    Comment.deleteOne({ _id: req.params.id })
        .then((result) => res.json({ resultado: result }))
        .catch((err) => res.json({ message: "Algo salio mal", error: err }))
}