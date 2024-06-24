var group = require("../../../Model/Food/Diet_group_item");
var group1 = require("../../../Model/Food/Diet_group_model");

class Diet_group_itemViewModel {
  addgroupitem = async (req, res) => {
    try {
      var groupid = req.params.gid;
      req.body.diet_group_id = groupid;

      var data = await group.create(req.body);
      var groupitemid = data._id;

      var data1 = await group1.findByIdAndUpdate(
        { _id: groupid },
        { $push: { diet_item_list: { diet_group_list: groupitemid } } }
      );

      res.status(200).json({
        status: "diet group item add",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  groupiddelete = async (req, res) => {
    try {
      var id = req.params.id;
      var diet_group_lis = req.params.did;

      var data1 = await group1.findByIdAndUpdate(
        { _id: id },
        { $pull: { diet_item_list: { diet_group_list: diet_group_lis } } }
      );

      res.status(200).json({
        status: "diet group item add",
        data1,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };
}

module.exports = new Diet_group_itemViewModel();
