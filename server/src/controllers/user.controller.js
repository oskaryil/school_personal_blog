const User = require("../models/user.model.js");
const router = require("express").Router();
const Joi = require("joi");
const _ = require("lodash");

const validation = {
  create: {
    username: Joi.string().required(),
    password: Joi.string().required(),
    name: Joi.string().required()
  }
};

const signup = async (req, res, next) => {
  const data = _.pick(req.body, ["username", "password", "name"]);
  try {
    const newUser = new User(data);
    let user = await newUser.generateAccessToken();
    res.status(201).header("Authorization", user.accessToken).send({
      success: true,
      message: "New user created",
      user: user
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({
      success: false,
      message: "Error while creating user",
      error: err
    });
  }
};

const login = async (req, res) => {
  const data = _.pick(req.body, ["username", "password"]);
  try {
    const user = await User.findByCredentials(data.username, data.password);
    return res.status(200).send({
      success: true,
      user: user.toAuthJSON()
    });
  } catch (err) {
    res.status(400).send({ success: false, error: JSON.stringify(err) });
  }
};

const getUserByUsername = async (req, res) => {
  const data = _.pick(req.params, ["username"]);
  try {
    const user = await User.findOne({ username: data.username });
    if (!user) {
      throw new Error("No user found");
    }
    return res.status(200).send({ success: true, user });
  } catch (err) {
    res.status(400).send({ success: false, error: err.message });
  }
};

module.exports = {
  validation,
  signup,
  login,
  getUserByUsername
};
