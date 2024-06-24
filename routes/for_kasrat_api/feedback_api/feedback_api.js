var express = require("express");
const {
  send_feedback,
  show_feedback,
  update_feedback,
  delete_feedback,
} = require("../../../Controller/for_kasrat/feedback_controller/feedback_controller");
var router = express.Router();

//send feedback
router.post("/feedback", send_feedback);

//show feedback
router.get("/feedbackshow/", show_feedback);

//update feedback
router.post("/feedbackupdate/:id", update_feedback);

//delete feedback
router.get("/feedbackdelete/:id", delete_feedback);

module.exports = router;
