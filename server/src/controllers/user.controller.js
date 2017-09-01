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
    let accessToken = await newUser.generateAccessToken();
    res.status(201).header("Authorization", accessToken).send({
      success: true,
      message: "New user created",
      username: data.username,
      accessToken
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

module.exports = {
  validation,
  signup,
  login
};
