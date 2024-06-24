const { add_chalange, accept_chalange, accept_chalang, show_chalange, update_chalange, delete_chalange, show_chalangeid, show_chalangegyid } = require("../../../Repository/gym_repo/gym_challenge_repo/gym_challenge_repo");

exports.add_chalange = async (req, res) => {
  add_chalange(req, res);
};

exports.accept_chalange = async (req, res) => {
  accept_chalange(req, res);
};

exports.accept_chalang = async (req, res) => {
  accept_chalang(req, res);
};

exports.show_chalange = async (req, res) => {
  show_chalange(req, res);
};

exports.update_chalange = async (req, res) => {
  update_chalange(req, res);
};

exports.delete_chalange = async (req, res) => {
  delete_chalange(req, res);
};

exports.show_chalangeid = async (req, res) => {
  show_chalangeid(req, res);
};

exports.show_chalangegyid = async (req, res) => {
  show_chalangegyid(req, res);
};
