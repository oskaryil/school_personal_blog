const mongoose = require("mongoose");
const slug = require("slug");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    tagLine: {
      type: String,
      required: false
    },
    slug: {
      type: String,
      lowercase: true,
      unique: true,
      required: false,
      trim: true
    },
    body: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: false
    }
  },
  { timestamps: true }
);

PostSchema.methods.toJSON = function() {
  return {
    _id: this._id,
    title: this.title,
    body: this.body,
    author: this.author,
    createdAt: this.createdAt
  };
};

PostSchema.methods.slugify = function() {
  this.slug = slug(this.title);
};

PostSchema.pre("validate", function(next) {
  this.slugify();

  next();
});

module.exports = mongoose.model("Post", PostSchema);
