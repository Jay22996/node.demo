var reedback = require("../../../Model/kasratUserModel/Feedback")


class kasrat_feedback_ViewModel {
  send_feedback = async (req, res) => {
    try {
      var data = await reedback.create(req.body);
      res.status(200).json({
        status: "feedback add",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  show_feedback = async (req, res) => {
    try {
      var data = await reedback.find().populate("user_id");
      res.status(200).json({
        status: "feedback add",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  update_feedback = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await reedback.findByIdAndUpdate(id, req.body);
      res.status(200).json({
        status: "feedback add",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  delete_feedback = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await reedback.findByIdAndDelete(id, req.body);
      res.status(200).json({
        status: "feedback add",
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

module.exports = new kasrat_feedback_ViewModel();
