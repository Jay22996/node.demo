const {
  website,
  websitef,
} = require("../../../Repository/for_kasrat_repo/kasrat_website_repo/kasrat_website_repo");

exports.website = async (req, res) => {
  website(req, res);
};
exports.websitef = async (req, res) => {
    websitef(req, res);
};
