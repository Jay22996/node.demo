var con = require("../../../Model/kasratModel/kasrat_contact");
var kastar = require("../../../Model/kasratModel/kasrat_inquiry");

class kasrat_inquiry_ViewModel {
  inquirykasratfind = async (req, res) => {
    try {
      var data = await kastar.find();
      res.status(200).json({
        status: "find",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  inquirykasrat = async (req, res) => {
    try {
      var data = await con.create(req.body);
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

module.exports = new kasrat_inquiry_ViewModel();
