const { addservice, updateservice, Deleteservice, findservice } = require("../../../Repository/gym_repo/gym_services_repo/gym_service_repo");


exports.addservice = async (req, res) => {
  addservice(req, res);
};

exports.updateservice = async (req, res) => {
  updateservice(req, res);
};

exports.Deleteservice = async (req, res) => {
  Deleteservice(req, res);
};

exports.findservice = async (req, res) => {
  findservice(req, res);
};
