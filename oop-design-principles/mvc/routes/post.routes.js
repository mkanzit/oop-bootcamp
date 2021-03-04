const express = require("express");
const router = express.Router();
const PostController = require("../controllers/post.controller");

router.get("/", PostController.apiGetAllPosts);
router.post("/", PostController.apiCreatePost);
router.get("/post/:id", PostController.apiGetPostById);
router.put("/post/:id", PostController.apiUpdatePost);
router.delete("/post/:id", PostController.apiDeletePost);

module.exports = router;
