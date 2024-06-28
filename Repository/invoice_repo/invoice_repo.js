var gym = require("../../Model/gymModel/gymmodel");
var userr = require("../../Model/userModel/UserModel");
var invoice = require("../../Model/gymUserModel/invoice");
var userModel = require("../../Model/userModel/UserModel");
var user_data = require("../../Model/userModel/User_Data");
const bcrypt = require("bcryptjs");
var chalange = require("../../Model/gymUserModel/ParticipateModel");

class invoice_ViewModel {
  showinvoicebyuser = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await invoice
        .find({ user_id: id })
        .populate("gym_id")
        .populate("user_id");
      var data1 = await userr.findById(id);
      var data3 = await gym.findById(data1.gym_id).populate("address");
      // console.log(data3)
      res.status(200).json({
        status: "show",
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

  showinvoicebygym = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await invoice
        .find({ gym_id: id })
        .populate("gym_id")
        .populate("user_id");
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

  showinvoice = async (req, res) => {
    try {
      var data = await invoice.find();
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

  updatewinvoice = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await invoice.findByIdAndUpdate(id, req.body);
      var data5 = await invoice.findByIdAndUpdate(id, {
        $push: {
          paymant_list: { paymant: req.body.paymant, date: new Date() },
        },
      });
      var uid = req.body.userId;
      var data1 = await userr.findByIdAndUpdate(uid, req.body);
      res.status(200).json({
        status: "update",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  createinvoice = async (req, res) => {
    try {
      var id = req.params.id;
      req.body.gym_id = id;
      var data = await invoice.create(req.body);
      var date = data.end_date;
      req.body.end_date = date;
      var id2 = data.user_id;
      var data2 = await userr.findByIdAndUpdate(id2, req.body);
      res.status(200).json({
        status: "create",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  createinvoicee = async (req, res) => {
    try {
      var find = await userModel.find({
        $or: [
          { email: req.body.email },
          { mobile_number: req.body.mobile_number },
        ],
      });

      if (find.length > 0) {
        const result = {
          email: false,
          mobile_number: false
        };
        find.forEach((user) => {
          if (user.email === req.body.email) {
            result.email = true;
          }
          if (user.mobile_number === req.body.mobile_number) {
            result.mobile_number = true;
          }
        });
        if (result.email && result.mobile_number) {
          res.status(200).json({
            status: "Email and Mobile Number are available",
          });
        } else if (result.email) {
          res.status(200).json({
            status: "Email is available",
          });
        } else if (result.mobile_number) {
          res.status(200).json({
            status: "Mobile Number is available",
          });
        }
      } else {
        var data1 = await user_data.create(req.body);
        const lat = await gym.findById(req.params.id);
        const latitude = lat.latitude
        const longitude = lat.longitude

        var password = await bcrypt.hash(req.body.password, 10);
        req.body.password = password;
        var data2 = data1._id;
        req.body.user_data = data2;
        req.body.latitude = latitude
        req.body.longitude = longitude
        var datar = await userModel.create(req.body);

        var userid = datar._id;
        var user_photo = datar.profile_photo;
        var user_name = datar.name;

        req.body.gym_id = req.params.id;
        req.body.user_id = userid;

        var data4 = await invoice.create(req.body);
        var iid = data4._id;
        var data5 = await invoice.findByIdAndUpdate(iid, {
          $push: {
            paymant_list: { paymant: req.body.paymant, date: new Date() },
          },
        });

        req.body.userid = userid;
        req.body.user_photo = user_photo;
        req.body.user_name = user_name;

        var Participate = await chalange.create(req.body);
        if (req.body.ref_method == "By person" && req.body.ref !== "") {
          if (req.body.ref_mobile != "") {
            await userr.findOneAndUpdate(
              { mobile_number: req.body.ref_mobile },
              { $push: { ref: { gym_id: req.params.id } } }
            );
          }
        }

        const data = await gym.findById(req.params.id);

        let responseSent = false;

        if (data.user_list.length != 0) {
          for (let i = 0; i < data.user_list.length; i++) {
            const user = data.user_list[i];
            if (user.user_data.toString() == userid.toString()) {
              const data = await gym.findById(req.params.id);

              var data1 = await userr.findByIdAndUpdate(userid, {
                gym_id: req.params.id,
                end_date: req.body.due_date,
                reason: req.body.reason,
              });
              0.0;

              responseSent = true;
              break;
            }
          }
        }

        if (!responseSent) {
          const data = await gym.findByIdAndUpdate(
            { _id: req.params.id },
            { $push: { user_list: { user_data: userid } } }
          );

          var data1 = await userr.findByIdAndUpdate(userid, {
            gym_id: req.params.id,
            end_date: req.body.due_date,
            reason: req.body.reason,
          });
          var req = req.body.ref2;
          console.log("aa", req);
          if (req === "") {
          } else {
            req.body.ref = req;
          }

          res.status(200).json({
            status: "create",
            data,
          });
          responseSent = true;
        }
      }
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };
}

module.exports = new invoice_ViewModel();
