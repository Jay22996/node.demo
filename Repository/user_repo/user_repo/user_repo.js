var user_data = require("../../../Model/userModel/User_Data");
var userModel = require("../../../Model/userModel/UserModel");
var chalange = require("../../../Model/gymUserModel/ParticipateModel");

class user_ViewModel {
  useradd = async (req, res) => {
    try {
      var find = await userModel.find({
        $or: [
          { email: req.body.email },
          { mobile_number: req.body.mobile_number },
        ],
      });

      if (find.length >= 1) {
        res.status(200).json({
          status: "user already is registered",
          data: find,
        });
      } else {
        var data1 = await user_data.create(req.body);

        var password = await bcrypt.hash(req.body.password, 10);
        req.body.password = password;
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - 1);
        var time = currentDate.toDateString();
        req.body.end_date = time;

        var data2 = data1._id;

        req.body.user_data = data2;
        var data = await userModel.create(req.body);
        var userid = data._id;
        var user_photo = data.profile_photo;
        var user_name = data.name;

        req.body.userid = userid;
        req.body.user_photo = user_photo;
        req.body.user_name = user_name;

        var Participate = await chalange.create(req.body);
        res.status(200).json({
          status: "user_data add",
          data,
          data1,
          Participate,
        });
      }
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  updateuser = async (req, res) => {
    try {
      var id = req.params.id;
      var updatedUser = await userModel.findOneAndUpdate(
        { _id: id },
        req.body,
        {
          new: true,
        }
      );
      // console.log(updatedUser);
      res.status(200).json({
        status: "user updated",
        data: updatedUser,
      });
    } catch (error) {
      // console.error(error);
      res.status(500).json({
        status: "error",
        message: "Failed to update user",
      });
    }
  };

  finduser = async (req, res) => {
    try {
      var data = await userModel
        .find()
        .populate("gym_id")
        .populate("user_data");
      res.status(200).json({
        status: "update user",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  finduserbyid = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await userModel
        .findById(id)
        .populate("user_data")
        .populate("gym_id");
      console.log(data);
      res.status(200).json({
        status: "find user",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  followers = async (req, res) => {
    try {
      var _id = req.params.id;
      var otherid = req.params.otherid;
      var data = await userModel.findById(_id);
      var data5 = await userModel.findById(otherid);
      var data2 = data.user_data;
      var data6 = data5.user_data;
      var data8 = data._id;
      var data9 = data5._id;

      var data3 = await user_data.findByIdAndUpdate(
        { _id: data2 },
        { $push: { following: { followingg: data9 } } }
      );
      var data4 = await user_data.findByIdAndUpdate(
        { _id: data6 },
        { $push: { followers: { followerss: data8 } } }
      );

      res.status(200).json({
        status: "add",
        data: [data3, data4],
      });
    } catch (error) {
      // console.error(error);
    }
  };

  followersshow = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await userModel.findById(id);
      var userdataid = data.user_data;

      var data1 = await user_data
        .findById(userdataid)
        .populate("following.followingg")
        .populate("followers.followerss")
        .populate("post.posts");

      res.status(200).json({
        status: "find",
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

  unfollowers = async (req, res) => {
    try {
      var _id = req.params.id;
      var otherid = req.params.otherid;
      var data = await userModel.findById(_id);
      var data5 = await userModel.findById(otherid);
      var data2 = data.user_data;
      var data6 = data5.user_data;
      var data8 = data._id;
      var data9 = data5._id;

      var data3 = await user_data.findByIdAndUpdate(
        { _id: data2 },
        { $pull: { following: { followingg: data9 } } }
      );
      var data4 = await user_data.findByIdAndUpdate(
        { _id: data6 },
        { $pull: { followers: { followerss: data8 } } }
      );

      res.status(200).json({
        status: "add",
        data: [data3, data4],
      });
    } catch (error) {
      // console.error(error);
    }
  };
}

module.exports = new user_ViewModel();
