var requ = require("../../../Model/kasratUserModel/Data_delete_req");

class delete_data_ViewModel {
  send_req = async (req, res) => {
    try {
      var data = await requ.create(req.body);
      res.status(200).json({
        status: "req send",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  delete_req = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await requ.findByIdAndDelete(id);
      res.status(200).json({
        status: "req delete",
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

module.exports = new delete_data_ViewModel();
