const {
  rating,
  findretting,
} = require("../../../Repository/gym_repo/rating_repo/rating_repo");

exports.rating = async (req, res) => {
  rating(req, res);
};

exports.findretting = async (req, res) => {
  findretting(req, res);
};
