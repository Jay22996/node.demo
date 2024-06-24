var exe = require("../../../Model/kasratGymModel/new_exercise_req");

class Allexe_reqViewModel {
  //send new exercise request
  exe_req = async (req, res) => {
    try {
      var id = req.params.id;
      req.body.user_id = id;
      var data = await exe.create(req.body);
      res.status(200).json({
        status: "send",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  //delete new exercise request
  exe_req_delete = async (req, res) => {
    try {
      var id = req.params.id;
      req.body.user_id = id;
      var data = await exe.findByIdAndDelete(id);
      res.status(200).json({
        status: "send",
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

module.exports = new Allexe_reqViewModel();