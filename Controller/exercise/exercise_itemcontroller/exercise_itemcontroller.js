const {
  exercise_list_remove,
  exercise_item,
  exercise_itemfind,
  exercise_itemdelete,
} = require("../../../Repository/exercise_repo/exercise_item_repo/exercise_item_repo");

exports.exercise_list_remove = async (req, res) => {
  exercise_list_remove(req, res);
};

exports.exercise_item = async (req, res) => {
  exercise_item(req, res);
};

exports.exercise_itemfind = async (req, res) => {
  exercise_itemfind(req, res);
};

exports.exercise_itemdelete = async (req, res) => {
  exercise_itemdelete(req, res);
};
