const mongoose = require("mongoose");
const CommentSchema = new mongoose.Schema(
    {
      text: { type: String, required: true, minlength: 5 },
      author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    },
    {
      timestamps: true,
    }
  );
  const Comment = mongoose.model('Comment', CommentSchema);

  module.exports = Comment ;