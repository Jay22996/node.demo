var user_data = require("../../../Model/userModel/User_Data");
var userModel = require("../../../Model/userModel/UserModel");
var chalange = require("../../../Model/gymUserModel/ParticipateModel");
var gymModel = require("../../../Model/gymModel/gymmodel");
var gym_data = require("../../../Model/gymModel/gym_data");

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
      // console.log(data);
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

  // followers = async (req, res) => {
  //   try {
  //     if (req.params.from === "gym") {
  //       if (req.params.to === "gym") {
  //         var _id = req.params.id;
  //         var otherid = req.params.otherid;
  //         var data = await gymModel.findById(_id);
  //         var data5 = await gymModel.findById(otherid);
  //         var data2 = data.gym_data;
  //         var data6 = data5.gym_data;
  //         var data8 = data._id;
  //         var data9 = data5._id;

  //         var data3 = await gym_data.findByIdAndUpdate(
  //           { _id: data2 },
  //           { $push: { following: { gym_id: data9 } } }
  //         );
  //         var data4 = await gym_data.findByIdAndUpdate(
  //           { _id: data6 },
  //           { $push: { followers: { gym_id: data8 } } }
  //         );

  //         res.status(200).json({
  //           status: "add",
  //           data: [data3, data4],
  //         });
  //       } else {
  //         // req.body.to === "user"
  //         var _id = req.params.id;
  //         var otherid = req.params.otherid;
  //         var data = await gymModel.findById(_id);
  //         var data5 = await user_data.findById(otherid);
  //         var data2 = data.gym_data;
  //         var data6 = data5.user_data;
  //         var data8 = data._id;
  //         var data9 = data5._id;

  //         var data3 = await gym_data.findByIdAndUpdate(
  //           { _id: data2 },
  //           { $push: { following: { user_id: data9 } } }
  //         );
  //         var data4 = await gym_data.findByIdAndUpdate(
  //           { _id: data6 },
  //           { $push: { followers: { gym_id: data8 } } }
  //         );

  //         res.status(200).json({
  //           status: "add",
  //           data: [data3, data4],
  //         });
  //       }
  //     } else {
  //       if (req.params.from === "user") {
  //         var _id = req.params.id;
  //         var otherid = req.params.otherid;
  //         var data = await userModel.findById(_id);
  //         var data5 = await userModel.findById(otherid);
  //         var data2 = data.user_data;
  //         var data6 = data5.user_data;
  //         var data8 = data._id;
  //         var data9 = data5._id;

  //         var data3 = await user_data.findByIdAndUpdate(
  //           { _id: data2 },
  //           { $push: { following: { user_id: data9 } } }
  //         );
  //         var data4 = await user_data.findByIdAndUpdate(
  //           { _id: data6 },
  //           { $push: { followers: { user_id: data8 } } }
  //         );
  //         res.status(200).json({
  //           status: "add",
  //           data: [data3, data4],
  //         });
  //       } else {
  //         // req.body.from === "gym"
  //         var _id = req.params.id;
  //         var otherid = req.params.otherid;
  //         var data = await userModel.findById(_id);
  //         var data5 = await gymModel.findById(otherid);
  //         var data2 = data.user_data;
  //         var data6 = data5.user_data;
  //         var data8 = data._id;
  //         var data9 = data5._id;

  //         var data3 = await user_data.findByIdAndUpdate(
  //           { _id: data2 },
  //           { $push: { following: { gym_id: data9 } } }
  //         );
  //         var data4 = await gym_data.findByIdAndUpdate(
  //           { _id: data6 },
  //           { $push: { followers: { user_id: data8 } } }
  //         );
  //         res.status(200).json({
  //           status: "add",
  //           data: [data3, data4],
  //         });
  //       }
  //     }
  //   } catch (error) {
  //     // console.error(error);
  //   }
  // };


  followers = async (req, res) => {
    try {
      const { from, to, id, otherid } = req.params;
      let data, otherData, dataField, otherDataField;
  
      if (from === "gym") {
        data = await gymModel.findById(id);
        otherData = to === "gym" ? await gymModel.findById(otherid) : await userModel.findById(otherid);
        dataField = data.gym_data;
        otherDataField = to === "gym" ? otherData.gym_data : otherData.user_data;
      } else if (from === "user") {
        data = await userModel.findById(id);
        otherData = to === "user" ? await userModel.findById(otherid) : await gymModel.findById(otherid);
        dataField = data.user_data;
        otherDataField = to === "user" ? otherData.user_data : otherData.gym_data;
      }
  
      const followingUpdate = to === "gym" 
        ? { gym_id: otherData._id } 
        : { user_id: otherData._id };
      const followersUpdate = from === "gym" 
        ? { gym_id: data._id } 
        : { user_id: data._id };
  
      const [updatedFollowing, updatedFollowers] = await Promise.all([
        (from === "gym" ? gym_data : user_data).findByIdAndUpdate(
          dataField, 
          { $push: { following: followingUpdate } }
        ),
        (to === "gym" ? gym_data : user_data).findByIdAndUpdate(
          otherDataField, 
          { $push: { followers: followersUpdate } }
        )
      ]);
  
      res.status(200).json({
        status: "add",
        data: [updatedFollowing, updatedFollowers]
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
  };
  
  followersshow = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await userModel.findById(id);
      var userdataid = data.user_data;

      var data1 = await user_data
        .findById(userdataid)
        .populate("followers.user_id")
        .populate("followers.gym_id")
        .populate("following.user_id")
        .populate("following.gym_id")
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

  gymfollowersshow = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await gymModel.findById(id);
      var userdataid = data.gym_data;

      var data1 = await gym_data
        .findById(userdataid)
        .populate("followers.user_id")
        .populate("followers.gym_id")
        .populate("following.user_id")
        .populate("following.gym_id")
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

  // unfollowers = async (req, res) => {
  //   try {
  //     var _id = req.params.id;
  //     var otherid = req.params.otherid;
  //     var data = await userModel.findById(_id);
  //     var data5 = await userModel.findById(otherid);
  //     var data2 = data.user_data;
  //     var data6 = data5.user_data;
  //     var data8 = data._id;
  //     var data9 = data5._id;

  //     var data3 = await user_data.findByIdAndUpdate(
  //       { _id: data2 },
  //       { $pull: { following: { followingg: data9 } } }
  //     );
  //     var data4 = await user_data.findByIdAndUpdate(
  //       { _id: data6 },
  //       { $pull: { followers: { followerss: data8 } } }
  //     );

  //     res.status(200).json({
  //       status: "add",
  //       data: [data3, data4],
  //     });
  //   } catch (error) {
  //     // console.error(error);
  //   }
  // };

  unfollowers = async (req, res) => {
    try {
      const { from, to, id, otherid } = req.params;
      let data, otherData, dataField, otherDataField;
  
      if (from === "gym") {
        data = await gymModel.findById(id);
        otherData = to === "gym" ? await gymModel.findById(otherid) : await userModel.findById(otherid);
        dataField = data.gym_data;
        otherDataField = to === "gym" ? otherData.gym_data : otherData.user_data;
      } else if (from === "user") {
        data = await userModel.findById(id);
        otherData = to === "user" ? await userModel.findById(otherid) : await gymModel.findById(otherid);
        dataField = data.user_data;
        otherDataField = to === "user" ? otherData.user_data : otherData.gym_data;
      }
  
      const followingUpdate = to === "gym" 
        ? { gym_id: otherData._id } 
        : { user_id: otherData._id };
      const followersUpdate = from === "gym" 
        ? { gym_id: data._id } 
        : { user_id: data._id };
  
      const [updatedFollowing, updatedFollowers] = await Promise.all([
        (from === "gym" ? gym_data : user_data).findByIdAndUpdate(
          dataField, 
          { $pull: { following: followingUpdate } }
        ),
        (to === "gym" ? gym_data : user_data).findByIdAndUpdate(
          otherDataField, 
          { $pull: { followers: followersUpdate } }
        )
      ]);
  
      res.status(200).json({
        status: "add",
        data: [updatedFollowing, updatedFollowers]
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
  };
}


module.exports = new user_ViewModel();
