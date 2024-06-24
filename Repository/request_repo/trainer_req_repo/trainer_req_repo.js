var card = require("../../../Model/gymUserModel/Trainerreq");
var gym = require("../../../Model/gymModel/gymmodel");
var userr = require("../../../Model/userModel/UserModel");

class trainer_req_ViewModel {
  sendreq = async (req, res) => {
    try {
      const tr_id = req.params.id;
      req.body.trainer_id = tr_id;
      var data = await card.create(req.body);
      res.status(200).json({
        status: "req sent",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  acceptreq = async (req, res) => {
    try {
      const id = req.params.id;
      const data2 = await card.findById(id);
      const { gym_id, trainer_id, role } = data2;
  
      req.body.gym_id = gym_id;
      const userField = req.body.receptionist === "no" ? "gym_trainers" : "gym_receptionist";
      const userRole = req.body.receptionist === "no" ? "trainers" : "receptionist";
  
      const data = await gym.findById(gym_id);
      const userList = data[userField];
  
      let userExists = false;
      for (let i = 0; i < userList.length; i++) {
        if (userList[i][userRole].toString() === trainer_id.toString()) {
          userExists = true;
          break;
        }
      }
  
      if (!userExists) {
        await gym.findByIdAndUpdate(
          gym_id,
          { $push: { [userField]: { [userRole]: trainer_id } } }
        );
      }
  
      const data1 = await userr.findByIdAndUpdate(trainer_id, req.body);
      const data3 = await card.findOneAndDelete(id);
  
      res.status(200).json({
        status: "req sent",
        data,
        data1,
        data3,
      });
  
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };
  
  showreq = async (req, res) => {
    try {
      const gymid = req.params.id;
      var data = await card.find({ gym_id: gymid }).populate("trainer_id");
      res.status(200).json({
        status: "req sent",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  delete_reqq = async (req, res) => {
    try {
      const id = req.params.id;
      var data = await card.findByIdAndDelete(id);
      res.status(200).json({
        status: "delete",
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

module.exports = new trainer_req_ViewModel();
