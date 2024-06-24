const { diet_assign, diet_show, diet_chack, diet_delete } = require("../../../Repository/food/assign_diet_repo/assign_diet_repo");

exports.diet_assign = async (req, res) => {
  diet_assign(req, res)
};

exports.diet_show = async (req, res) => {
  diet_show(req, res)
};

exports.diet_chack = async (req, res) => {
  diet_chack(req, res)
};

exports.diet_delete = async (req, res) => {
  diet_delete(req, res)
};
