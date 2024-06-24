const {
  send_req,
  delete_req,
} = require("../../../Repository/for_kasrat_repo/data_delete_repo/data_delete_repo");

exports.send_req = async (req, res) => {
  send_req(req, res);
};

exports.delete_req = async (req, res) => {
  delete_req(req, res);
};
