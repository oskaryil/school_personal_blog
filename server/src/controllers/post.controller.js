const Post = require("../models/post.model.js");
const router = require("express").Router();
const Joi = require("joi");
const _ = require("lodash");

const validation = {
  create: {
    title: Joi.string().min(3).required(),
    body: Joi.string().min(3).required(),
    tagLine: Joi.string(),
    tags: Joi.array()
  }
};

const newPost = async (req, res) => {
  const data = _.pick(req.body, ["title", "body", "tagLine", "tags"]);

  try {
    data.author = req.user._id;
    const newPost = new Post(data);
    await newPost.save();
    res
      .status(201)
      .send({ success: true, message: "Post successfully created" });
  } catch (err) {
    console.log(err);
    res.status(400).send({
      success: false,
      message: "Error while creating post",
      error: err
    });
    throw new Error("Error while saving post");
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).populate("author");
    return res.status(200).send(posts.reverse());
  } catch (err) {
    return res.status(500).send({
      message: "An error ocurred while fetching the posts",
      error: err
    });
  }
};

const deletePost = async (req, res) => {
  const { postId } = _.pick(req.body, ["postId"]);
  try {
    const deletedPost = await Post.findByIdAndRemove(postId);
    if (!deletedPost) {
      throw new Error("No post found with that _id found");
    }
    return res
      .status(200)
      .send({ success: true, message: "Deleted post", deletedPost });
  } catch (err) {
    return res.status(400).send({ success: false, error: err.message });
  }
};

const getPostsByUserId = async (req, res) => {
  const { userId } = _.pick(req.query, ["userId"]);
  try {
    const posts = await Post.find({ author: userId });
    res.status(200).send({ posts });
  } catch (err) {
    res.status(400).send({ success: false, error: err.message });
  }
};

module.exports = {
  validation,
  newPost,
  deletePost,
  getAllPosts,
  getPostsByUserId
};
