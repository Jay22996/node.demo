var exercise = require("../../../Model/exercisemedel/exercise_groupmodel");

class exercise_groupitemViewModel {

  
  exercise_groupitem = async (req, res) => {
    try {
      var gym_num = req.params.id;
      var exercise_item_id1 = req.params.item_id;
      req.body.gym_id = gym_num;
      var data = await exercise.findByIdAndUpdate(
        { _id: gym_num },
        { $push: { exercise_list: { exercise_item_id: exercise_item_id1 } } }
      );
      res.status(200).json({
        status: "add item",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  exercise_groupadd = async (req, res) => {
    try {
      var gym_id = req.params.id;
      req.body.gym_id = gym_id;
      var data = await exercise.create(req.body);
      res.status(200).json({
        status: "add group",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  exercise_groupdelete = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await exercise.findByIdAndDelete(id);
      res.status(200).json({
        status: "group find",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  exercise_groupupdate = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await exercise.findByIdAndUpdate(id, req.body);
      res.status(200).json({
        status: "group delete",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  exercise_groupfindbyid = async (req, res) => {
    try {
      var _id = req.params.id;
      var data = await exercise
        .findById(_id)
        // .populate("gym_id")
        .populate("exercise_list.exercise_item_id");
      res.status(200).json({
        status: "group find",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  exercise_groupfindbygymid = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await exercise
        .find({ gym_id: id })
        .populate("exercise_list.exercise_item_id");
      res.status(200).json({
        status: "gym group find",
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

module.exports = new exercise_groupitemViewModel();
