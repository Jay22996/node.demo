const {
  attendence,
  attenuser,
  attengym,
  attenuserday,
  atteshowgym,
} = require("../../../Repository/gym_repo/attendance_repo/attendance_repo");

exports.attendence = async (req, res) => {
  attendence(req, res);
};

exports.attenuser = async (req, res) => {
  attenuser(req, res);
};

exports.attengym = async (req, res) => {
  attengym(req, res);
};

exports.attenuserday = async (req, res) => {
  attenuserday(req, res);
};

exports.atteshowgym = async (req, res) => {
  atteshowgym(req, res);
};
