const { exe_req, exe_req_delete } = require("../../../Repository/exercise_repo/request_exercise_repo/request_exercise_repo");

//exe req
exports.exe_req = async (req, res) => {
    exe_req(req, res);
  };
  
  //exe_req_delete
  exports.exe_req_delete = async (req, res) => {
    exe_req_delete(req, res);
  };