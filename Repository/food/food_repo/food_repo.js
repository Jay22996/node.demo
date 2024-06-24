var food = require("../../../Model/Food/Food_details");

class AllfoodViewModel {
  addfood = async (req, res) => {
    try {
      var data = await food.create(req.body);
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

  findfood = async (req, res) => {
    try {
      var data = await food.find();
      res.status(200).json({
        status: "find",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  updatefood = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await food.findByIdAndUpdate(id, req.body);
      res.status(200).json({
        status: "food update",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  deletefood = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await food.findByIdAndDelete(id, req.body);
      res.status(200).json({
        status: "food delete",
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

module.exports = new AllfoodViewModel();
