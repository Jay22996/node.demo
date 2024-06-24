var chalange = require("../../../Model/gymModel/Chalangemodel");
var part = require("../../../Model/gymUserModel/ParticipateModel");
var mon = require("../../../Model/kasratModel/monthly_data");
var mongoose = require("mongoose");

class gym_callange_ViewModel {
  add_chalange = async (req, res) => {
    try {
      var data = await chalange.create(req.body);
      let currentDate = new Date();

      let day = currentDate.getDate();
      let month = currentDate.getMonth() + 1;
      let year = currentDate.getFullYear();

      day = day < 10 ? "0" + day : day;
      month = month < 10 ? "0" + month : month;

      let formattedDate = `66${month}${year}`;

      var id = `${formattedDate}${formattedDate}${formattedDate}`;

      const objectId = new mongoose.Types.ObjectId(id);
      var report = await mon.findOne(objectId);
      // console.log(report);
      if (report == null) {
        req.body._id = id;
        req.body.challenge = 1;
        req.body.participante = 0;
        var report = await mon.create(req.body);
      } else {
        var report = await mon.findOneAndUpdate(
          { _id: id },
          { $inc: { challenge: 1 } }
        );
      }
      res.status(200).json({
        status: "chalange inserted",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  accept_chalange = async (req, res) => {
    try {
      let currentDate = new Date();

      let day = currentDate.getDate();
      let month = currentDate.getMonth() + 1;
      let year = currentDate.getFullYear();

      day = day < 10 ? "0" + day : day;
      month = month < 10 ? "0" + month : month;

      let formattedDate = `66${month}${year}`;

      var id = `${formattedDate}${formattedDate}${formattedDate}`;

      const objectId = new mongoose.Types.ObjectId(id);
      var report = await mon.findOne(objectId);
      // console.log(report);
      if (report == null) {
        req.body._id = id;
        req.body.challenge = 0;
        req.body.participante = 1;
        var report = await mon.create(req.body);
      } else {
        var report = await mon.findOneAndUpdate(
          { _id: id },
          { $inc: { participante: 1 } }
        );
      }

      var userid = req.params.uid;
      var data3 = await part.findOne({ userid: userid }, req.body, {
        new: true,
      });
      var id = data3.chalange_id;
      if (id === undefined) {
        var id1 = req.params.id;
        req.body.chalange_id = id1;
        var data = await part.findOneAndUpdate({ userid: userid }, req.body, {
          new: true,
        });
        var participate = data._id;
        var data2 = await chalange.findByIdAndUpdate(
          { _id: id1 },
          {
            $push: {
              participate: { participates: participate, user_id: userid },
            },
          }
        );
        res.status(200).json({
          status: "chalange accept",
          data2,
          data,
        });
      } else {
        res.status(200).json({
          status: "you already participate",
          data: data3.chalange_id,
        });
      }
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  accept_chalang = async (req, res) => {
    try {
      var userid = req.params.uid;
      var id1 = req.params.id;
      req.body.chalange_id = id1;
      var data = await part.findOneAndUpdate({ userid: userid }, req.body, {
        new: true,
      });
      var participate = data._id;
      // console.log(participate)
      var id2 = req.body.old_id;
      var data3 = await chalange.findByIdAndUpdate(
        { _id: id2 },
        {
          $pull: {
            participate: { participates: participate, user_id: userid },
          },
        }
      );
      var data2 = await chalange.findByIdAndUpdate(
        { _id: id1 },
        {
          $push: {
            participate: { participates: participate, user_id: userid },
          },
        }
      );

      res.status(200).json({
        status: "chalange accept",
        data2,
        data,
        data3,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  show_chalange = async (req, res) => {
    try {
      var data = await chalange
        .find()
        .populate("participate.participates")
        .populate("participate.user_id");
      res.status(200).json({
        status: "chalange inserted",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  update_chalange = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await chalange.findByIdAndUpdate(id, req.body);
      res.status(200).json({
        status: "chalange inserted",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  delete_chalange = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await chalange.findByIdAndDelete(id);
      res.status(200).json({
        status: "chalange inserted",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  show_chalangeid = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await part.findOne({ userid: id });
      var chalange_id = data.chalange_id;
      var data1 = await chalange
        .findById(chalange_id)
        .select({ chalange_name: 1, chalange_group: 1 });

      res.status(200).json({
        status: "chalange show",
        data,
        data1,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  show_chalangegyid = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await chalange
        .find({ gym_id: id })
        .populate("gym_id")
        .populate("participate.user_id")
        .populate("participate.participates");

      res.status(200).json({
        status: "chalange show",
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

module.exports = new gym_callange_ViewModel();
