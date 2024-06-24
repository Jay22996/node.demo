var con = require("../../../Model/kasratModel/kasrat_contact");

class kasrat_contact_ViewModel {
  contactkasrat = async (req, res) => {
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

  findkasratfind = async (req, res) => {
    try {
      var data = await con.find();
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
}

module.exports = new kasrat_contact_ViewModel();
