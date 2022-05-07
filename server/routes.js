const UserController = require('./controllers/user.controlller');
const PostController = require('./controllers/post.controller');
const CommentController = require('./controllers/comment.controller');
const authenticate = require('./config/authenticate');

module.exports = function (app) {

    app.post("/api/register", UserController.Register);
    app.post("/api/login", UserController.Login);
    app.post("/api/logout", UserController.Logout);
    //Para acceder a estas rutas hay que estar autenticado.
    app.get("/api/users", authenticate, UserController.getAll);
    app.get('/api/user/:id', authenticate, UserController.getUser);
    app.post("/api/post/", PostController.createNewPost);
    app.get("/api/post", PostController.findAllPost);
    app.get("/api/post/:id", PostController.findOnePost);
    app.get("/api/postByUser/:id", PostController.getPostByUser);
    app.put("/api/post/:id", PostController.updatePost);
    app.delete("/api/post/:id", PostController.deletePost);
    app.post("/api/comment/", CommentController.createNewComment);
    app.get("/api/comment", CommentController.findAllComment);
    app.get("/api/comment/:id", CommentController.findOneComment);
    app.put("/api/comment/:id", CommentController.updateComment);
    app.delete("/api/comment/:id", CommentController.deleteComment);
}