const {
  addpost,
  showpost,
  like,
  unlike,
  fire,
  unfire,
  deletepost,
  updatepost,
} = require("../../Repository/post_repo/post_repo");

exports.addpost = async (req, res) => {
  addpost(req, res);
};

exports.showpost = async (req, res) => {
  showpost(req, res);
};

exports.like = async (req, res) => {
  like(req, res);
};

exports.unlike = async (req, res) => {
  unlike(req, res);
};

exports.fire = async (req, res) => {
  fire(req, res);
};

exports.unfire = async (req, res) => {
  unfire(req, res);
};

exports.deletepost = async (req, res) => {
  deletepost(req, res);
};

exports.updatepost = async (req, res) => {
  updatepost(req, res);
};
