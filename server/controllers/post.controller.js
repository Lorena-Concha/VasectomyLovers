const { default: mongoose } = require("mongoose");
const Post = require("../models/post.model");

module.exports.findAllPost = (req, res) => {
    Post.find().populate('author').populate({
        path: 'comments',
        populate: {
          path: 'author',
          model: 'User'
        }
      })
        .then((allPosts) => res.json({ posts: allPosts }))
        .catch((err) => res.json({ message: "Algo salio mal", error: err }))
}

module.exports.getPostByUser = (req, res) => {
    Post.find({ author: req.params.id }).populate('author').populate({
        path: 'comments',
        populate: {
          path: 'author',
          model: 'User'
        }
      })
        .then((allPosts) => res.json({ posts: allPosts }))
        .catch((err) => res.json({ message: "Algo salio mal", error: err }))
}

module.exports.createNewPost = (req, res) => {
    Post.create({
        title : req.body.title,
        text : req.body.text,
        author: mongoose.Types.ObjectId(req.body.author),
        comments:req.body.comments
    })
        .then((newPost) => res.json({ post: newPost }))
        .catch(err => res.status(400).json(err));
}

module.exports.findOnePost = (req, res) => {
    Post.findOne({ _id: req.params.id })
        .then((post) => res.json({ post: post }))
        .catch((err) => res.json({ message: "Algo salio mal", error: err }))
}

module.exports.updatePost = (req, res) => {
    console.log(req.body)
    console.log(req.params)
    Post.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((post) => res.json({ post: post}))
        .catch((err) => res.json({ message: "Algo salio mal", error: err }))
}

module.exports.deletePost = (req, res) => {
    Post.deleteOne({ _id: req.params.id })
        .then((result) => res.json({ resultado: result }))
        .catch((err) => res.json({ message: "Algo salio mal", error: err }))
}