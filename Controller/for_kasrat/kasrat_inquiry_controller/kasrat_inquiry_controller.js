const { inquirykasratfind, inquirykasrat } = require("../../../Repository/for_kasrat_repo/kasrat_inquiry_repo/kasrat_inquiry_repo");

exports.inquirykasratfind = async (req, res) => {
  inquirykasratfind(req, res);
};

exports.inquirykasrat = async (req, res) => {
  inquirykasrat(req, res);
};
