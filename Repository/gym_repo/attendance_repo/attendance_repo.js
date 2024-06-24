var mongoose = require("mongoose");
var gym = require("../../../Model/gymModel/gymmodel");
var dayy = require("../../../Model/kasratModel/Daily_data");
var user = require("../../../Model/userModel/UserModel");
var addan = require("../../../Model/userModel/Attendence");

class attendance_ViewModel {
  attendence = async (req, res) => {
    try {
      var id1 = req.params.id;
      var user_id = req.body.user_id;
      var data = await gym.findById(id1);

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
      req.body.last_active_date = currentDate;
      var date1 = await user.findByIdAndUpdate(user_id, req.body);
      // console.log(report);
      if (report == null) {
        req.body._id = id;
        req.body.like = 0;
        req.body.fire = 0;
        req.body.post = 0;
        req.body.attendance = 1;
        req.body.work_out = 0;
        req.body.diet = 0;
        req.body.inquiry = 0;
        req.body.user_req = 0;
        var report = await dayy.create(req.body);
      } else {
        var report = await dayy.findOneAndUpdate(
          { _id: id },
          { $inc: { attendance: 1 } }
        );
      }

      var latitude = data.latitude;
      var longitude = data.longitude;
      // console.log( latitude)
      // console.log( longitude)

      var user_latitude = req.body.latitude;
      var user_longitude = req.body.longitude;
      // console.log(user_latitude)
      // console.log(user_longitude)

      const R = 6371;
      const dLat = ((latitude - user_latitude) * Math.PI) / 180;
      const dLon = ((longitude - user_longitude) * Math.PI) / 180;
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((user_latitude * Math.PI) / 180) *
          Math.cos((latitude * Math.PI) / 180) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c * 1000;
      // console.log(distance)
      if (distance > 40) {
        res.status(200).json({
          status: "not",
        });
      } else {
        req.body.user_id = user_id;
        req.body.gym_id = id1;
        var data = await addan.create(req.body);
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

  attenuser = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await addan.find({ user_id: id }).populate("user_id");

      res.status(200).json({
        status: "show",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  attengym = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await addan.find({ gym_id: id }).populate("user_id");

      res.status(200).json({
        status: "show",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  attenuserday = async (req, res) => {
    try {
      var id = req.params.id;
      const cday = req.params.day;
      const cmonth = req.params.month;
      const cyear = req.params.year;

      var cdate = `${cday}/${cmonth}/${cyear}`;
      var data = await addan.find({ user_id: id });

      if (data.length == 0) {
        res.status(200).json({
          status: "data not found",
        });
      } else {
        for (var i = 0; i < data.length; i++) {
          var ddate = data[i].date;
          const mdate = new Date(ddate);
          const mday = String(mdate.getDate()).padStart(2, "0");
          const mmonth = String(mdate.getMonth() + 1).padStart(2, "0");
          const myear = mdate.getFullYear();
          var mdate1 = `${mday}/${mmonth}/${myear}`;
          console.log(mdate1);

          if (cdate == mdate1) {
            res.status(200).json({
              status: "show",
              data: data[i],
            });
            break;
          } else if (i == data.length - 1 && cdate != mdate1) {
            res.status(200).json({
              status: "absonte",
            });
          }
        }
      }
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  atteshowgym = async (req, res) => {
    try {
      const id = req.params.id;
      const cday = req.params.day;
      const cmonth = req.params.month;
      const cyear = req.params.year;

      const cdate = `${String(cday).padStart(2, "0")}/${String(cmonth).padStart(
        2,
        "0"
      )}/${cyear}`;
      const data = await addan.find({ gym_id: id }).populate("user_id");

      if (data.length === 0) {
        return res.status(200).json({
          status: "data not found",
        });
      }

      let found = false;
      const resultData = [];

      data.forEach((item) => {
        const ddate = item.date;
        const mdate = new Date(ddate);
        const mday = String(mdate.getDate()).padStart(2, "0");
        const mmonth = String(mdate.getMonth() + 1).padStart(2, "0");
        const myear = mdate.getFullYear();
        const mdate1 = `${mday}/${mmonth}/${myear}`;

        if (cdate === mdate1) {
          found = true;
          // Assuming 'mathort' data needs to be pushed
          resultData.push(item); // Modify as per your data structure
        }
      });
      console.log(resultData);
      if (!found) {
        return res.status(200).json({
          status: "absent",
        });
      }

      return res.status(200).json({
        status: "show",
        data: resultData, // Adjust data structure as per your requirement
      });
    } catch (error) {
      return res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };
}

module.exports = new attendance_ViewModel();
