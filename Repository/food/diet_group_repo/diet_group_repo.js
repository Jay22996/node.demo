var diet = require("../../../Model/Food/Diet_group_model");

class Alldiet_groupViewModel {
  diet_group_add = async (req, res) => {
    try {
      var data = await diet.create(req.body);
      res.status(200).json({
        status: "diet add",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  diet_group_findgym = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await diet
        .find({ gym_id: id })
        .populate("diet_item_list.diet_group_list");
      res.status(200).json({
        status: "food add",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  diet_group_findid = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await diet
        .findById(id)
        .populate("diet_item_list.diet_group_list");
      res.status(200).json({
        status: "food add",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  diet_group_update = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await diet.findByIdAndUpdate(id, req.body);
      res.status(200).json({
        status: "diet update",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  diet_group_delete = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await diet.findByIdAndDelete(id);
      res.status(200).json({
        status: "diet delete",
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

module.exports = new Alldiet_groupViewModel();
