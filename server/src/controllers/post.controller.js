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
    data.author = req.user.name;
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
    const posts = await Post.find({});
    return res.status(200).send(posts.reverse());
  } catch (err) {
    return res.status(500).send({
      message: "An error ocurred while fetching the posts",
      error: err
    });
  }
};

module.exports = {
  validation,
  newPost,
  getAllPosts
};
