var gym = require("../../../Model/gymModel/gymmodel");
const bcrypt = require("bcryptjs");
var msg = require("../../../Model/gymModel/announcement_model");
var list = require("../../../Model/gymModel/gym_visit_detail");
var Collection = require("../../../Model/gymModel/Collection");
var address = require("../../../Model/gymModel/Gymaddress");
var gymdata = require("../../../Model/gymModel/gym_data");


class gym_ViewModel {
  addgym = async (req, res) => {
    try {
      var password = await bcrypt.hash(req.body.password, 10);
      req.body.password = password;
      var data = await gym.create(req.body);
      var gym_id = data._id;
      req.body.gym_id = gym_id;
      var data8 = await msg.create(req.body);
      req.body.gym_id = gym_id;
      var data = await list.create(req.body);
      var data2 = {
        address: req.body.addresss,
        city: req.body.city,
        state: req.body.state,
        pin_code: req.body.pin_code,
        county: req.body.county,
        gym_id: gym_id,
      };
      var dataid = await gymdata.create(req.body)
      var data4 = await address.create(data2);
      var add = data4._id;
      req.body.address = add;
      req.body.gym_data = dataid._id;
      await gym.findByIdAndUpdate(gym_id, req.body);
       await Collection.create({ gym_id: gym_id });


      res.status(200).json({
        status: "gym inserted",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  findgym = async (req, res) => {
    try {
      var data = await gym.find().populate("address");
      res.status(200).json({
        status: "gym updated",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  findgymbyid = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await gym
        .findById(id)
        .populate("rating.ratingid")
        .populate("address")
        .populate("gym_trainers.trainers")
        .populate("user_list.user_data")
        .populate("gym_receptionist.receptionist")
        .populate("rating.user_id")
        .populate("gym_data");

      res.status(200).json({
        status: "gym updated",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  updategym = async (req, res) => {
    try {
      var id = req.params.id;

      var data = await gym.findByIdAndUpdate(id, req.body);
      res.status(200).json({
        status: "gym updated",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  detelegym = async (req, res) => {
    try {
      var _id = req.params.id;

      var data = await gym.findByIdAndDelete(_id);
      res.status(200).json({
        status: "gym Delete",
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

module.exports = new gym_ViewModel();
