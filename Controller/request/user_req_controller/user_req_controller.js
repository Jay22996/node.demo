const { membersendreq, showuserreq, accepusertreq, delete_req } = require("../../../Repository/request_repo/user_req__repo/user_req__repo");

exports.membersendreq = async (req, res) => {
  membersendreq(req, res);
};

exports.showuserreq = async (req, res) => {
  showuserreq(req, res);
};

exports.accepusertreq = async (req, res) => {
  accepusertreq(req, res);
};

exports.delete_req = async (req, res) => {
  delete_req(req, res);
};
