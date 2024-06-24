var inquiry = require("../../../Model/gymUserModel/Inquiry_form");
var dayy = require("../../../Model/kasratModel/Daily_data");
var mongoose = require("mongoose");

class inquiry_req_ViewModel {
  inquirysend = async (req, res) => {
    try {
      var id = req.params.id;
      req.body.gym_id = id;
      var data = await inquiry.create(req.body);

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
        req.body.diet = 0;
        req.body.inquiry = 1;
        req.body.user_req = 0;
        var report = await dayy.create(req.body);
      } else {
        var report = await dayy.findOneAndUpdate(
          { _id: id },
          { $inc: { inquiry: 1 } }
        );
      }

      res.status(200).json({
        status: "inquiry send",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  inquirydelete = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await inquiry.findByIdAndDelete(id);
      res.status(200).json({
        status: "inquiry delete",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  inquiryfind = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await inquiry.find({ gym_id: id });
      res.status(200).json({
        status: "inquiry find",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  inquiryactione = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await inquiry.findOneAndUpdate(
        { _id: id },
        {
          $push: {
            action: {
              reason: req.body.reason,
              date: req.body.date,
              name: req.body.name,
            },
          },
        }
      );
      res.status(200).json({
        status: "inquiry action",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  inquiryactioneupdate = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await inquiry.findOneAndUpdate(
        { _id: id },
        { $pull: { action: { _id: req.body.id } } }
      );
      res.status(200).json({
        status: "inquiry action update",
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

module.exports = new inquiry_req_ViewModel();
