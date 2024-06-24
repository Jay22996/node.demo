var gym = require("../../../Model/gymModel/gymmodel");
var userr = require("../../../Model/userModel/UserModel");

class remove_trainer_ViewModel {
  remove = async (req, res) => {
    try {
      var id2 = req.params.id;
      if (req.body.role == "trainer") {
        var data = await userr.findByIdAndUpdate(id2, { gym_id: null });
        var data1 = data.gym_id;
        var gym1 = await gym.findByIdAndUpdate(data1, {
          $pull: { gym_trainers: { trainers: id2 } },
        });
        res.status(200).json({
          status: "done",
          data,
        });
      } else {
        var data = await userr.findByIdAndUpdate(id2, { gym_id: null });
        var data1 = data.gym_id;
        var gym1 = await gym.findByIdAndUpdate(data1, {
          $pull: { gym_receptionist: { receptionist: id2 } },
        });
        res.status(200).json({
          status: "done",
          data,
        });
      }
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };
}

module.exports = new remove_trainer_ViewModel();
