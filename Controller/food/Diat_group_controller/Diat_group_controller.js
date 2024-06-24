const { diet_group_add, diet_group_update, diet_group_delete, diet_group_findid, diet_group_findgym } = require("../../../Repository/food/diet_group_repo/diet_group_repo");

exports.diet_group_add = async (req, res) => {
  diet_group_add(req, res);
};

exports.diet_group_update = async (req, res) => {
  diet_group_update(req, res);
};

exports.diet_group_delete = async (req, res) => {
  diet_group_delete(req, res);
};

exports.diet_group_findid = async (req, res) => {
  diet_group_findid(req, res);
};

exports.diet_group_findgym = async (req, res) => {
  diet_group_findgym(req, res);
};
