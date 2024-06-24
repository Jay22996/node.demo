const {
  Logingym,
  forget_pas,
  forget_pass,
} = require("../../../Repository/gym_repo/auth_repo/auth_repo");

exports.Logingym = async (req, res) => {
  Logingym(req, res);
};

exports.forget_pas = async (req, res) => {
  forget_pas(req, res);
};

exports.forget_pass = async (req, res) => {
  forget_pass(req, res);
};
