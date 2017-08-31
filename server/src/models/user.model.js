const mongoose = require("mongoose");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const constants = require("../config/constants");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    accessToken: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true
  }
);

UserSchema.methods.toJSON = function() {
  const user = this;
  const userObject = user.toObject();

  _.pick(userObject, ["name", "username", "accessToken"]);
};

UserSchema.methods.generateAccessToken = async function() {
  const user = this;
  const accessTokenJWTPayload = {
    id: user._id
  };
  const accessTokenJWTOptions = {
    expiresIn: constants.ACCESS_TOKEN_EXPIRES
  };

  const accessToken = jwt
    .sign(accessTokenJWTPayload, constants.JWT_SECRET, accessTokenJWTOptions)
    .toString();

  user.accessToken = accessToken;
  await user.save();
  return accessToken;
};

UserSchema.statics.findByCredentials = async function(username, password) {
  const User = this;
  return User.findOne({ username }).then(user => {
    if (!user) {
      return Promise.reject();
    }

    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, res) => {
        if (!res) {
          reject(err);
        } else {
          resolve(user);
        }
        // resolve(user);
      });
    });
  });
};

UserSchema.pre("save", function(next) {
  const user = this;

  if (user.isModified("password")) {
    // user.password

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (err, hash) => {
        user.password = hash;
        return next();
      });
    });
    // user.password = hash;
    // next()
  } else {
    return next();
  }
});

module.exports = mongoose.model("User", UserSchema);
