var web = require("../../../Model/kasratModel/Website_detail");

class kasrat_website_ViewModel {
  website = async (req, res) => {
    try {
      var id = "66431d90fe000b9b0ab649ec";
      var data = await web.findByIdAndUpdate(id, req.body);
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

  websitef = async (req, res) => {
    try {
      var id = "66431d90fe000b9b0ab649ec";
      var data = await web.findById(id);
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

module.exports = new kasrat_website_ViewModel();
