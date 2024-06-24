const { chack_assign, assign_add, assign_delete, assign_show, assign_perform, assign_day_wise } = require("../../../Repository/exercise_repo/assign_exercise_repo/assign_exercise_repo");

exports.chack_assign = async (req, res) => {
  chack_assign(req, res)
};

exports.assign_add = async (req, res) => {
  assign_add(req, res)
};

exports.assign_delete = async (req, res) => {
  assign_delete(req, res)
};

exports.assign_perform = async (req, res) => {
  assign_perform(req, res)
};

// exports.assign_show = async (req, res) => {
//   assign_show(req, res)
// };

exports.assign_day_wise = async (req, res) => {
  assign_day_wise(req, res)
};
