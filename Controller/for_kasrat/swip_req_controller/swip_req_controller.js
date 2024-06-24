const { account_swip_req, account_swip_showall, account_swip_show, account_swip_req_delete } = require("../../../Repository/for_kasrat_repo/swip_req_repo/swip_req_repo");

exports.account_swip_req = async (req, res) => {
  account_swip_req(req, res);
};

exports.account_swip_showall = async (req, res) => {
  account_swip_showall(req, res);
};

exports.account_swip_show = async (req, res) => {
  account_swip_show(req, res);
};

exports.account_swip_accsept = async (req, res) => {
  account_swip_accsept(req, res);
};

exports.account_swip_req_delete = async (req, res) => {
  account_swip_req_delete(req, res);
};
