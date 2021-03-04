const postService = require("../services/post.service");

module.exports = class Post {
  static async apiGetAllPosts(req, res, next) {
    try {
      const posts = await postService.getAllPosts();
      if (!posts) {
        res.status(404).json("There are no post published yet!");
      }

      res.render("home", { posts });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiGetPostById(req, res, next) {
    try {
      let id = req.params.id || {};
      const post = await postService.getPostbyId(id);
      res.render("post");
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiCreatePost(req, res, next) {
    try {
      const createdPost = await postService.createPost(req.body);
      res.json(createdPost);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiUpdatePost(req, res, next) {
    try {
      const comment = {};
      comment.title = req.body.title;
      comment.body = req.body.body;
      comment.published = req.body.published;

      const updatedPost = await postService.updatePost(comment);

      if (updatedPost.modifiedCount === 0) {
        throw new Error("Unable to update post, error occord");
      }

      res.json(updatedPost);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiDeletePost(req, res, next) {
    try {
      const postId = req.params.id;
      const deleteResponse = await postService.deletePost(postId);
      res.json(deleteResponse);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
