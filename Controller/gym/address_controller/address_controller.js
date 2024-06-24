const {
  add_address,
  update_address,
} = require("../../../Repository/gym_repo/address_repo/address_repo");

exports.add_address = async (req, res) => {
  add_address(req, res);
};

exports.update_address = async (req, res) => {
  update_address(req, res);
};
