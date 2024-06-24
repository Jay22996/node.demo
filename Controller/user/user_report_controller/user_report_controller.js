const { updatereport, addreport, findreport, deletereport } = require("../../../Repository/user_repo/user_report_repo/user_report_repo");

exports.addreport = async (req, res) => {
  addreport(req, res)
};

exports.updatereport = async (req, res) => {
  updatereport(req, res)
};

exports.findreport = async (req, res) => {
  findreport(req, res)
};

exports.deletereport = async (req, res) => {
  deletereport(req, res)
};
