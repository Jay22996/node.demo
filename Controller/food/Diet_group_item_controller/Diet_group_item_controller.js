const { addgroupitem, groupiddelete } = require("../../../Repository/food/diet_group_item_repo/diet_group_item_repo");

exports.addgroupitem = async (req, res) => {
  addgroupitem(req, res)
};

exports.groupiddelete = async (req, res) => {
  groupiddelete(req, res)
  };
