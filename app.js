var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const routes = require("./routes/routes");

var cors = require("cors");
const corsOptions = {
  origin: ["https://kasrat-web.vercel.app", "http://localhost:3000"],
  methods: "GET , POST",
  credentials: true,
};

var app = express();
app.use(cors(corsOptions));
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//announcement
app.use("/announcement", routes.announcement);

//exercise
app.use("/exercise", [
  routes.all_exercise_api,
  routes.assign_exercise_api,
  routes.exercise_group_api,
  routes.exercise_item_api,
  routes.request_exercise_api,
]);

//food
app.use("/food", [
  routes.assign_diet_api,
  routes.diet_group_api,
  routes.diet_group_item_api,
  routes.food_api,
]);

//for kasrat
app.use("/forkasrat", [
  routes.contact_kasrat_api,
  routes.data_delete_api,
  routes.feedback_api,
  routes.kasrat_inquiry_api,
  routes.kasrat_website,
  routes.swip_req_api,
]);

//gym
app.use("/gym", [
  routes.address_api,
  routes.attendance_api,
  routes.auth_api,
  routes.gym_api,
  routes.gym_challenge_api,
  routes.gym_service_api,
  routes.gym_visit_list_api,
  routes.rating_api,
  routes.remove_trainer_api,
]);

//invoice
app.use("/invoice", routes.invoice_api);

//post
app.use("/post", routes.post_api);

//new request
app.use("/request", [
  routes.inquiry_api,
  routes.trainer_req_api,
  routes.user_req__api,
]);

//user
app.use("/user", [
  routes.user_auth_api,
  routes.user_api,
  routes.user_report_api,
]);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
