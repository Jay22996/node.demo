var swip = require("../../../Model/kasratUserModel/Account_swip")
var user = require("../../../Model/userModel/UserModel")

class account_swip_ViewModel {
  account_swip_req = async (req, res) => {
    try {
      var data = await swip.create(req.body);
      res.status(200).json({
        status: "send req",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  account_swip_showall = async (req, res) => {
    try {
      var data = await swip.find();
      res.status(200).json({
        status: "send req",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  account_swip_show = async (req, res) => {
    try {
      var user_id = req.params.id;
      var data = await swip.find({ user_id: user_id });
      res.status(200).json({
        status: "send req",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  account_swip_accsept = async (req, res) => {
    try {
      var id = req.params.id;
      var user_id = req.body.user_id;
      var data = await user.findByIdAndUpdate(id, req.body);
      var data1 = await swip.findOneAndDelete({ user_id: user_id });
      res.status(200).json({
        status: "done",
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

  account_swip_req_delete = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await user.findOneAndDelete(id);

      res.status(200).json({
        status: "done",
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

module.exports = new account_swip_ViewModel();
