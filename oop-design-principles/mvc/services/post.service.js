const Post = require("../models/Post");

module.exports = class PostService {
  static async getAllPosts() {
    try {
      const allPosts = await Post.find();
      return allPosts;
    } catch (error) {
      console.log(`Could not fetch Posts ${error}`);
    }
  }

  static async createPost(data) {
    try {
      const newPost = {
        title: data.title,
        body: data.body,
        published: data.published,
      };

      const response = await new Post(newPost).save();
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  static async getPostbyId(PostId) {
    try {
      const singlePostResponse = await Post.findById({ _id: PostId });
      return singlePostResponse;
    } catch (error) {
      console.log(`Post not found. ${error}`);
    }
  }

  static async updatePost(title, body, published) {
    try {
      const updateResponse = await Post.updateOne(
        { title, body, published },
        { $set: { date: new Date.now() } }
      );

      return updateResponse;
    } catch (error) {
      console.log(`Could not update Post ${error}`);
    }
  }

  static async deletePost(PostId) {
    try {
      const deletedResponse = await Post.findOneAndDelete(PostId);
      return deletedResponse;
    } catch (error) {
      console.log(`Could  ot delete Post ${error}`);
    }
  }
};
