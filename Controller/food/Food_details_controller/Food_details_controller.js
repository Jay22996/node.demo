const { addfood, updatefood, deletefood, findfood } = require("../../../Repository/food/food_repo/food_repo");

exports.addfood = async (req, res) => {
  addfood(req, res)
};

exports.updatefood = async (req, res) => {
  updatefood(req, res)
};

exports.deletefood = async (req, res) => {
  deletefood(req, res)
};

exports.findfood = async (req, res) => {
  findfood(req, res)
};
