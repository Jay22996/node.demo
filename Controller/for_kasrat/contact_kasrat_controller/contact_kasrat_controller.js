const {
  contactkasrat,
  findkasratfind,
} = require("../../../Repository/for_kasrat_repo/contact_kasrat_repo/contact_kasrat_repo");

exports.contactkasrat = async (req, res) => {
  contactkasrat(req, res);
};

exports.findkasratfind = async (req, res) => {
  findkasratfind(req, res);
};
