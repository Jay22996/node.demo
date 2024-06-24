var post = require("../../Model/userModel/Postmodel");
var userdata = require("../../Model/userModel/User_Data");
var user = require("../../Model/userModel/UserModel");
var chalange = require("../../Model/gymUserModel/ParticipateModel");
var dayy = require("../../Model/kasratModel/Daily_data");
var mongoose = require("mongoose");

class post_ViewModel {
  addpost = async (req, res) => {
    try {
      var id = req.params.id;
      req.body.user_id = id;
      var data = await post.create(req.body);
      var postid = data._id;

      var data1 = await user.findById(id);
      var userdataid = data1.user_data;

      var data2 = await userdata.findByIdAndUpdate(
        { _id: userdataid },
        { $push: { post: { posts: postid } } }
      );
      var data3 = await chalange.findOneAndUpdate(
        { userid: id },
        { $inc: { post: 1 } }
      );
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
        req.body.post = 1;
        req.body.attendance = 0;
        req.body.work_out = 0;
        req.body.diet = 0;
        req.body.inquiry = 0;
        req.body.user_req = 0;
        var report = await dayy.create(req.body);
      } else {
        var report = await dayy.findOneAndUpdate(
          { _id: id },
          { $inc: { post: 1 } }
        );
      }
      res.status(200).json({
        status: "post inserted",
        data2,
        data3,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  showpost = async (req, res) => {
    try {
      var data = await post.find().populate("user_id");
      res.status(200).json({
        status: "like post",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  like = async (req, res) => {
    try {
      var postid = req.params.id;
      var userid = req.body.userid;
      // console.log(userid);

      var data = await post.findByIdAndUpdate(
        { _id: postid },
        { $push: { like: { likes: userid } } }
      );

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
        req.body.like = 1;
        req.body.fire = 0;
        req.body.post = 0;
        req.body.attendance = 0;
        req.body.work_out = 0;
        req.body.diet = 0;
        var report = await dayy.create(req.body);
      } else {
        var report = await dayy.findOneAndUpdate(
          { _id: id },
          { $inc: { like: 1 } }
        );
      }
      res.status(200).json({
        status: "like post",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  unlike = async (req, res) => {
    try {
      var postid = req.params.id;
      var userid = req.body.userid;
      var data = await post.findByIdAndUpdate(
        { _id: postid },
        { $pull: { like: { likes: userid } } }
      );
      res.status(200).json({
        status: "like post",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  fire = async (req, res) => {
    try {
      var postid = req.params.id;
      var userid = req.body.userid;
      var data = await post.findByIdAndUpdate(
        { _id: postid },
        { $push: { fire: { fires: userid } } }
      );
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
        req.body.fire = 1;
        req.body.post = 0;
        req.body.attendance = 0;
        req.body.work_out = 0;
        req.body.diet = 0;
        var report = await dayy.create(req.body);
      } else {
        var report = await dayy.findOneAndUpdate(
          { _id: id },
          { $inc: { fire: 1 } }
        );
      }
      res.status(200).json({
        status: "like post",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  unfire = async (req, res) => {
    try {
      var postid = req.params.id;
      var userid = req.body.userid;
      var data = await post.findByIdAndUpdate(
        { _id: postid },
        { $pull: { fire: { fires: userid } } }
      );
      res.status(200).json({
        status: "like post",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  deletepost = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await post.findByIdAndDelete(id);
      var userid = data.user_id;
      var postid = data._id;

      var data3 = await chalange.findOneAndUpdate(
        { userid: userid },
        { $inc: { post: -1 } }
      );

      var data1 = await user.findById(userid);
      var userdataid = data1.user_data;
      var data3 = await userdata.findByIdAndUpdate(
        { _id: userdataid },
        { $pull: { post: { posts: postid } } }
      );
      res.status(200).json({
        status: "post delete",
        data3,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  updatepost = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await post.findByIdAndUpdate(id, req.body);
      res.status(200).json({
        status: "post inserted",
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

module.exports = new post_ViewModel();
