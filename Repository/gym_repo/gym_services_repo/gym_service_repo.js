var servis = require("../../../Model/gymModel/servicemodel");

class gym_service_ViewModel {
  addservice = async (req, res) => {
    try {
      var gym_number = req.params.id;
      req.body.gym_number = gym_number;
      var data = await servis.create(req.body);
      res.status(200).json({
        status: "service inserted",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  updateservice = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await servis.findByIdAndUpdate(id, req.body);
      res.status(200).json({
        status: "service update",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  Deleteservice = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await servis.findByIdAndDelete(id);
      res.status(200).json({
        status: "service Delete",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  findservice = async (req, res) => {
    try {
      var data = await servis.find().populate("gym_number");
      res.status(200).json({
        status: "find service",
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

module.exports = new gym_service_ViewModel();
