var servis = require("../../../Model/userModel/User_report");

class user_add_req_ViewModel {
  addreport = async (req, res) => {
    try {
      var id = req.params.id;
      req.body.user_id = id;
      var data = await servis.create(req.body);
      res.status(200).json({
        status: "add report",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  updatereport = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await servis.findByIdAndUpdate(id, req.body);
      res.status(200).json({
        status: "update",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  findreport = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await servis.find({ user_id: id });
      res.status(200).json({
        status: "add report",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  deletereport = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await servis.findByIdAndDelete(id);
      res.status(200).json({
        status: "add report",
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

module.exports = new user_add_req_ViewModel();
