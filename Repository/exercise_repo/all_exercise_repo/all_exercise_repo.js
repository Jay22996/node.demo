const exerciseModel = require("../../../Model/exercisemedel/exerciseModel");
var exe = require("../../../Model/kasratGymModel/new_exercise_req");

class AllExerciseViewModel {
  //add execiser
  addexercise = async (req, res) => {
    try {
      var data = await exerciseModel.create(req.body);
      res.status(200).json({
        status: "exercise inserted",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  //find exercise
  findexercise = async (req, res) => {
    try {
      var data = await exerciseModel.find();
      res.status(200).json({
        status: "exercise find",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  //update exercise
  updateexercise = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await exerciseModel.findByIdAndUpdate(id, req.body);
      res.status(200).json({
        status: "exercise updated",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  //delete exercise
  deleteexercise = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await exerciseModel.findByIdAndDelete(id);
      res.status(200).json({
        status: "exercise delete",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };
}

module.exports = new AllExerciseViewModel();