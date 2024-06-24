var exeitem = require("../../../Model/exercisemedel/exercise_itemmodel");
var group = require("../../../Model/exercisemedel/exercise_groupmodel");
const otpGenerator = require("otp-generator");

class exercise_listViewModel {
  exercise_list_remove = async (req, res) => {
    try {
      var egid = req.params.id;
      var exercise_list_id = req.params.lid;
      var data = await exercise.findByIdAndUpdate(
        { _id: egid },
        { $pull: { exercise_list: { exercise_item_id: exercise_list_id } } }
      );
      res.status(200).json({
        status: "add item",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  exercise_item = async (req, res) => {
    try {
      var group_id = req.params.gid;
      var gym_id = req.params.gnid;
      req.body.e_g_id = group_id;
      req.body.gym_id = gym_id;
      var burn = req.body.burn;
      var time = req.body.time;

      if (time == "0") {
        var rep1 = req.body.rep1;
        var rep2 = req.body.rep2;
        var rep3 = req.body.rep3;
        var rep4 = req.body.rep4;
        if (rep1 === "") {
          rep1 = "0";
        } else if (rep2 === "") {
          rep2 = "0";
        } else if (rep3 === "") {
          rep3 = "0";
        } else if (rep4 === "") {
          rep4 = "0";
        } else if (burn === "") {
          rep4 = "0";
        }

        var rep1n = Number(rep1);
        var rep2n = Number(rep2);
        var rep3n = Number(rep3);
        var rep4n = Number(rep4);
        var total = rep1n + rep2n + rep3n + rep4n;
      } else {
        var time1 = Number(time);
        var total = time1;
      }

      var burn = Number(burn);

      var cal_burn = total * burn;

      req.body.cal_burn = cal_burn;
      req.body.total_rep = total;
      req.body.reps = [rep1n, rep2n, rep3n, rep4n];
      var oid = otpGenerator.generate(10, {
        upperCaseAlphabets: false,
        specialChars: false,
      });
      req.body.find = oid;
      var data = await exeitem.create(req.body);

      var data4 = await exeitem.findOne({ find: oid });
      var data5 = data4._id;

      var data6 = await group.findByIdAndUpdate(
        { _id: group_id },
        {
          $push: {
            exercise_list: { exercise_item_id: data5, performstatus: data5 },
          },
        }
      );
      res.status(200).json({
        status: "add item",
        data,
        data6,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  exercise_itemfind = async (req, res) => {
    try {
      var data = await exeitem.find();
      res.status(200).json({
        status: "add item",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  exercise_itemdelete = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await exeitem.findByIdAndDelete(id);

      res.status(200).json({
        status: "add delete",
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

module.exports = new exercise_listViewModel();
