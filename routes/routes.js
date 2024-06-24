class Routes {
  constructor() {
    // announcement
    this.announcement = require("./../routes/announcement_api/announcement");

    // all exercise
    this.all_exercise_api = require("./../routes/exercise_api/all_exerciser_api/all_exerciser_api");
    this.assign_exercise_api = require("./../routes/exercise_api/assign_exercise_api/assign_exercise_api");
    this.exercise_group_api = require("./../routes/exercise_api/exercise_group_api/exercise_group_api");
    this.exercise_item_api = require("./../routes/exercise_api/exercise_item_api/exercise_item_api");
    this.request_exercise_api = require("./../routes/exercise_api/request_exercise_api/request_exercise_api");

    // all food
    this.assign_diet_api = require("./../routes/food_api/assign_diet_api/assign_diet_api");
    this.diet_group_api = require("./../routes/food_api/diet_group_api/diet_group_api");
    this.diet_group_item_api = require("./../routes/food_api/diet_group_item_api/diet_group_item_api");
    this.food_api = require("./../routes/food_api/food_api/food_api");

    //for kasrat
    this.contact_kasrat_api = require("./../routes/for_kasrat_api/contact_kasrat_api/contact_kasrat_api");
    this.data_delete_api = require("./../routes/for_kasrat_api/data_delete_api/data_delete_api");
    this.feedback_api = require("./../routes/for_kasrat_api/feedback_api/feedback_api");
    this.kasrat_inquiry_api = require("./../routes/for_kasrat_api/kasrat_inquiry_api/kasrat_inquiry_api");
    this.kasrat_website = require("./../routes/for_kasrat_api/kasrat_website/kasrat_website");
    this.swip_req_api = require("./../routes/for_kasrat_api/swip_req_api/swip_req_api");

    //for gym
    this.address_api = require("./../routes/gym_api/address_api/address_api");
    this.attendance_api = require("./../routes/gym_api/attendance_api/attendance_api");
    this.auth_api = require("./../routes/gym_api/auth_api/auth_api");
    this.gym_api = require("./../routes/gym_api/gym_api/gym_api");
    this.gym_challenge_api = require("./../routes/gym_api/gym_challenge_api/gym_challenge_api");
    this.gym_service_api = require("./../routes/gym_api/gym_services_api/gym_service_api");
    this.gym_visit_list_api = require("./../routes/gym_api/gym_visit_list_api/gym_visit_list_api");
    this.rating_api = require("./../routes/gym_api/rating_api/rating_api");
    this.remove_trainer_api = require("./../routes/gym_api/remove_trainer_api/remove_trainer_api");

    //for invoice
    this.invoice_api = require("./../routes/invoice_api/invoice_api");

    //for post
    this.post_api = require("./../routes/post_api/post_api");

    //for request
    this.inquiry_api = require("./../routes/request_api/inquiry_api/inquiry_api");
    this.trainer_req_api = require("./../routes/request_api/inquiry_api/inquiry_api");
    this.user_req__api = require("./../routes/request_api/user_req__api/user_req__api");

    //for user
    this.user_auth_api = require("./../routes/user_api/auth_api/auth_api");
    this.user_api = require("./../routes/user_api/user_api/user_api");
    this.user_report_api = require("./../routes/user_api/user_report_api/user_report_api");
  }
}

module.exports = new Routes();
