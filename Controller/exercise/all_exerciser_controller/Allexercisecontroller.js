const {
  addexercise,
  updateexercise,
  findexercise,
  deleteexercise
} = require("../../../Repository/exercise_repo/all_exercise_repo/all_exercise_repo");

//add exercise
exports.addexercise = async (req, res) => {
  addexercise(req, res);
};

//update exercise
exports.updateexercise = async (req, res) => {
  updateexercise(req, res);
};

//find exercise
exports.findexercise = async (req, res) => {
  findexercise(req, res);
};

//delete exercise
exports.deleteexercise = async (req, res) => {
  deleteexercise(req, res);
};
