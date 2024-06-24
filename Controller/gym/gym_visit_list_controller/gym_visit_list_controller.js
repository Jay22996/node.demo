const { addlist, list_show, list_show_all } = require("../../../Repository/gym_repo/gym_visit_list_repo/gym_visit_list_repo");

exports.addlist = async (req, res) => {
  addlist(req, res);
};

exports.list_show = async (req, res) => {
  list_show(req, res);
};

exports.list_show_all = async (req, res) => {
  list_show_all(req, res);
};
