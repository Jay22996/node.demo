const { remove } = require("../../../Repository/gym_repo/remove_trainer_repo/remove_trainer_repo");



exports.remove = async (req, res) => {
  remove(req, res)
  };