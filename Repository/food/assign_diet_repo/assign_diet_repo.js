var assign = require("../../../Model/Food/Diet_assign");
var group = require("../../../Model/Food/Diet_group_model");
var dayy = require("../../../Model/kasratModel/Daily_data");
var mongoose = require("mongoose");

class diet_assign_ViewModel {
  diet_assign = async (req, res) => {
    try {
      var data = await assign.create(req.body);
      var assingid = data._id;

      var groupid = req.params.id;
      var data = await group.findById(groupid);
      var length = data.diet_item_list.length;

      var diet_list_id = data.diet_item_list;
      // console.log(diet_list_id[0].diet_group_list);

      for (var i = 0; i < length; i++) {
        var list = diet_list_id[i].diet_group_list;
        var data = await assign.findByIdAndUpdate(
          { _id: assingid },
          { $push: { diet_list: { diet_list_id: list } } }
        );
      }

      let currentDate = new Date();

      let day = currentDate.getDate();
      let month = currentDate.getMonth() + 1;
      let year = currentDate.getFullYear();

      day = day < 10 ? "0" + day : day;
      month = month < 10 ? "0" + month : month;

      let formattedDate = `${day}${month}${year}`;

      var id = `${formattedDate}${formattedDate}${formattedDate}`;

      const objectId = new mongoose.Types.ObjectId(id);
      var report = await dayy.findOne(objectId);
      // console.log(report);
      if (report == null) {
        req.body._id = id;
        req.body.like = 0;
        req.body.fire = 0;
        req.body.post = 0;
        req.body.attendance = 0;
        req.body.work_out = 0;
        req.body.diet = 1;
        req.body.inquiry = 0;
        req.body.user_req = 0;
        var report = await dayy.create(req.body);
      } else {
        var report = await dayy.findOneAndUpdate(
          { _id: id },
          { $inc: { diet: 1 } }
        );
      }
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

  diet_show = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await assign
        .findOne({ user_id: id })
        .populate("diet_list.diet_list_id");

      if (data == null) {
        res.status(200).json({
          status: "not assign",
        });
      } else {
        res.status(200).json({
          status: "assign",
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

  diet_chack = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await assign.findOne({ user_id: id });

      if (!data) {
        res.status(200).json({
          status: "data not found",
        });
      } else {
        if (Array.isArray(data) && data.length === 0) {
          res.status(200).json({
            status: "data not found",
          });
        } else {
          res.status(200).json({
            status: "already assign",
            data,
          });
        }
      }
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  diet_delete = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await assign.findOneAndDelete({ user_id: id });

      res.status(200).json({
        status: "assign delete",
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

module.exports = new diet_assign_ViewModel();
