const {
  verify,
  register,
  login,
  forget_pas,
  forget_pass,
} = require("../../../Repository/user_repo/auth_repo/auth_repo");

exports.verify = async (req, res) => {
  verify(req, res);
};

exports.register = async (req, res) => {
  register(req, res);
};

exports.login = async (req, res) => {
  login(req, res);
};

exports.forget_pas = async (req, res) => {
  forget_pas(req, res);
};

exports.forget_pass = async (req, res) => {
  forget_pass(req, res);
};
