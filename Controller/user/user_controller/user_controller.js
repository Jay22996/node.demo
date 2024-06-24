const {
  useradd,
  updateuser,
  finduser,
  finduserbyid,
  followers,
  followersshow,
  unfollowers,
} = require("../../../Repository/user_repo/user_repo/user_repo");

exports.useradd = async (req, res) => {
  useradd(req, res);
};

exports.updateuser = async (req, res) => {
  updateuser(req, res);
};

exports.finduser = async (req, res) => {
  finduser(req, res);
};

exports.finduserbyid = async (req, res) => {
  finduserbyid(req, res);
};

exports.followers = async (req, res) => {
  followers(req, res);
};

exports.followersshow = async (req, res) => {
  followersshow(req, res);
};

exports.unfollowers = async (req, res) => {
  unfollowers(req, res);
};
