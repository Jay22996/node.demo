var list = require("../../../Model/gymModel/gym_visit_detail");

class gym_visit_list_ViewModel {
  addlist = async (req, res) => {
    try {
      var user_id = req.params.id;
      var date = req.body.date;
      var group_id = req.body.gym_id;
      var data = await list.findOneAndUpdate(
        { gym_id: group_id },
        { $push: { list: { user_id: user_id, date: date } } }
      );
      res.status(200).json({
        status: "add to list",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  list_show = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await list.find({ gym_id: id }).populate("list.user_id");
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

  list_show_all = async (req, res) => {
    try {
      var data = await list.find().populate("list.user_id").populate("gym_id");
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

module.exports = new gym_visit_list_ViewModel();
