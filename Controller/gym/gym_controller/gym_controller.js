const { addgym, findgym, findgymbyid, updategym, detelegym } = require("../../../Repository/gym_repo/gym_repo/gym_repo");

exports.addgym = async (req, res) => {
  addgym(req, res);
};

exports.findgym = async (req, res) => {
  findgym(req, res);
};

exports.findgymbyid = async (req, res) => {
  findgymbyid(req, res);
};

exports.updategym = async (req, res) => {
  updategym(req, res);
};

exports.detelegym = async (req, res) => {
  detelegym(req, res);
};
