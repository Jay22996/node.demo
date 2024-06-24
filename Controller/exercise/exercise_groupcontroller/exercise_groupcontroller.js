const {
  exercise_groupadd,
  exercise_groupitem,
  exercise_groupdelete,
  exercise_groupupdate,
  exercise_groupfindbyid,
  exercise_groupfindbygymid,
} = require("../../../Repository/exercise_repo/exercise_group_repo/exercise_group_repo");

exports.exercise_groupadd = async (req, res) => {
  exercise_groupadd(req, res);
};

exports.exercise_groupitem = async (req, res) => {
    exercise_groupitem(req, res)
};

exports.exercise_groupdelete = async (req, res) => {
    exercise_groupdelete(req, res)
};

exports.exercise_groupupdate = async (req, res) => {
    exercise_groupupdate(req, res)
};

exports.exercise_groupfindbyid = async (req, res) => {
    exercise_groupfindbyid(req, res)
};

exports.exercise_groupfindbygymid = async (req, res) => {
    exercise_groupfindbygymid(req, res)
};
