var invoice = require("../../../Model/gymUserModel/invoice");
var gym1 = require("../../../Model/gymModel/Gymaddress");
var dayy = require("../../../Model/kasratModel/Daily_data");
var mongoose = require("mongoose");
var Collection = require("../../../Model/gymModel/Collection");
var ucard = require("../../../Model/gymUserModel/memberrew");


// const formattedDate = currentDate.toISOString().slice(0, 10).replace(/-/g, '');

class user_req_ViewModel {
  membersendreq = async (req, res) => {
    try {
      const user_id = req.params.id;
      req.body.user_id = user_id;

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
        req.body.inquiry = 0;
        req.body.user_req = 1;
        var report = await dayy.create(req.body);
      } else {
        var report = await dayy.findOneAndUpdate(
          { _id: id },
          { $inc: { user_req: 1 } }
        );
      }

      var data = await ucard.create(req.body);
      res.status(200).json({
        status: "req sent",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  showuserreq = async (req, res) => {
    try {
      const gymid = req.params.id;
      var data = await ucard.find({ gym_id: gymid }).populate("user_id");
      res.status(200).json({
        status: "show user",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  accepusertreq = async (req, res) => {
    try {
      try {
        const id = req.params.id;
        var data2 = await ucard.findById(id);
        var gym_id = data2.gym_id;
        var user_id = data2.user_id;
        var sdate = data2.start_date;
        var edate = data2.end_date;
        var plan = data2.plan;
        var reason = data2.reason;
        var comment = data2.comment;
        var ref_mobile = data2.ref;
        var ref_method = data2.ref_method;
        var refPersonOnKasrat = data2.refPersonOnKasrat;
        var data2 = await Collection.findOneAndUpdate(
          { gym_id: gym_id },
          {
            $push: {
              Collection: {
                user_id: user_id,
                paymant: req.body.payment,
                reason: "new invoice",
                accept_by: req.body.accept_by,
              },
            },
          }
        );

        // var U_id = user_id
        // var Paymant = await userr.findByIdAndUpdate(U_id,red.body)

        // console.log(typeof ref_mobile);
        if (ref_method == "By person" && refPersonOnKasrat == "yes") {
          if (ref_mobile != "") {
            await userr.findOneAndUpdate(
              { mobile_number: ref_mobile },
              { $push: { ref: { gym_id: gym_id } } }
            );
          }
        }

        const data = await gym.find(gym_id);

        let responseSent = false;

        if (data[0].user_list.length != 0) {
          for (let i = 0; i < data[0].user_list.length; i++) {
            const user = data[0].user_list[i];
            if (user.user_data.toString() == user_id.toString()) {
              const data = await gym.findById(gym_id);
              var iddd = data.address;
              var adds = await gym1.findById(iddd);
              var addreshid = adds.address;

              var data1 = await userr.findByIdAndUpdate(user_id, {
                gym_id: gym_id,
                end_date: edate,
                due_date: req.body.due_date,
                reason: reason,
                panding_payment: req.body.remain,
              });
              req.body.user_id = user_id;
              req.body.gym_id = gym_id;
              req.body.start_date = sdate;
              req.body.end_date = edate;
              req.body.plan = plan;
              req.body.reason = reason;
              req.body.comment = comment;
              req.body.gym_address = addreshid;
              req.body.ref = ref_mobile;
              req.body.ref_method = ref_method;

              var data4 = await invoice.create(req.body);
              var iid = data4._id;
              var data5 = await invoice.findByIdAndUpdate(iid, {
                $push: {
                  paymant_list: { paymant: req.body.payment, date: new Date() },
                },
              });

              var data3 = await ucard.findByIdAndDelete(id);
              res.status(200).json({
                status: "req sent",
                data,
                data1,
                data3,
                data4,
              });
              responseSent = true;
              break;
            }
          }
        }

        if (!responseSent) {
          const data = await gym.findByIdAndUpdate(
            { _id: gym_id },
            { $push: { user_list: { user_data: user_id } } }
          );
          var iddd = data.address;
          var adds = await gym1.findById(iddd);
          var addreshid = adds.address;

          var data1 = await userr.findByIdAndUpdate(user_id, {
            gym_id: gym_id,
            end_date: edate,
            due_date: req.body.due_date,
            reason: reason,
            panding_payment: req.body.remain,
          });
          req.body.user_id = user_id;
          req.body.gym_id = gym_id;
          req.body.start_date = sdate;
          req.body.end_date = edate;
          req.body.plan = plan;
          req.body.reason = reason;
          req.body.comment = comment;
          req.body.gym_address = addreshid;
          req.body.ref = ref_mobile;
          req.body.ref_method = ref_method;

          var data4 = await invoice.create(req.body);
          var iid = data4._id;
          var data5 = await invoice.findByIdAndUpdate(iid, {
            $push: {
              paymant_list: { paymant: req.body.payment, date: new Date() },
            },
          });
          var data3 = await ucard.findByIdAndDelete(id);
          res.status(200).json({
            status: "req sent",
            data,
            data1,
            data3,
            data4,
          });
          responseSent = true;
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({
          status: "error",
          message: "Internal server error",
        });
      }
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  delete_req = async (req, res) => {
    try {
      const id = req.params.id;
      var data = await ucard.findByIdAndDelete(id);
      res.status(200).json({
        status: "delete",
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

module.exports = new user_req_ViewModel();
