const { send_feedback, update_feedback, delete_feedback, show_feedback } = require("../../../Repository/for_kasrat_repo/feedback_repo/feedback_repo");

exports.send_feedback = async (req, res) => {
  send_feedback(req, res);
};

exports.update_feedback = async (req, res) => {
    update_feedback(req, res);
};

exports.delete_feedback = async (req, res) => {
    delete_feedback(req, res);
};

exports.show_feedback = async (req, res) => {
    show_feedback(req, res);
};
