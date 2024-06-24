var userModel = require("../../../Model/userModel/UserModel");
const bcrypt = require("bcryptjs");
var nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
var user_data = require("../../../Model/userModel/User_Data");
var chalange = require("../../../Model/gymUserModel/ParticipateModel");

var email2 = "";
var password = "";
class user_auth_ViewModel {
  verify = async (req, res) => {
    try {
      var email1 = req.body.email;
      var number = req.body.mobile_number;
      email2 = email1.toLowerCase();
      var find = await userModel.find({
        $or: [{ email: email2 }, { mobile_number: number }],
      });
      // console.log(find)
      if (find.length >= 1) {
        res.status(409).json({
          status: "user already is registered",
          data: find,
        });
      } else {
        otp = otpGenerator.generate(6, {
          upperCaseAlphabets: false,
          specialChars: false,
          lowerCaseAlphabets: false,
        });
        password = await bcrypt.hash(req.body.password, 10);

        try {
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "kasratforgym@gmail.com",
              pass: "wvksjrhupagflakp",
            },
          });

          const mailOptions = {
            from: "kasratforgym@gmail.com",
            to: `${email2}`,
            subject: "One time otp",
            text: `${otp}`,
          };

          // Use async/await to make sendMail asynchronous
          await transporter.sendMail(mailOptions);

          // Send response after email is sent

          res.status(200).json({
            status: `Email sent successfully`,
            otp: otp,
          });
        } catch (error) {
          console.error("Error sending email:", error);

          res.status(500).json({
            status: "Error",
            message: "Failed to send email",
            error: error.message,
          });
        }
      }
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  register = async (req, res) => {
    try {
      req.body.email = email2;
      var data1 = await user_data.create(req.body);

      req.body.password = password;
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() - 1);
      var time = currentDate.toDateString();
      req.body.end_date = time;

      var data2 = data1._id;

      req.body.user_data = data2;
      var data = await userModel.create(req.body);
      var userid = data._id;
      var user_photo = data.profile_photo;
      var user_name = data.name;

      req.body.userid = userid;
      req.body.user_photo = user_photo;
      req.body.user_name = user_name;

      var Participate = await chalange.create(req.body);
      res.status(200).json({
        status: "user_data add",
        data,
        data1,
        Participate,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  login = async (req, res) => {
    try {
      var email1 = req.body.email;
      var email = email1.toLowerCase();
      var find = await userModel.find({
        $or: [{ email: email }, { mobile_number: email }],
      });

      if (find.length == 1) {
        const isPasswordMatch = await bcrypt.compare(
          req.body.password,
          find[0].password
        );
        if (isPasswordMatch) {
          res.status(200).json({
            status: "user is logged in",
            data: find,
          });
        } else {
          res.status(200).json({
            status: "password does not match",
          });
        }
      } else {
        res.status(200).json({
          status: "please register",
        });
      }
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  forget_pas = async (req, res) => {
    try {
      var email = req.body.email;
      var data = await userModel.findOne({ email: email });
      if (data !== null) {
        var id = data._id;
        var otp = otpGenerator.generate(6, {
          upperCaseAlphabets: false,
          specialChars: false,
          lowerCaseAlphabets: false,
        });
        try {
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "kasratforgym@gmail.com",
              pass: "wvksjrhupagflakp",
            },
          });

          const mailOptions = {
            from: "kasratforgym@gmail.com",
            to: `${email}`,
            subject: "One time otp",
            text: `${otp}`,
          };

          // Use async/await to make sendMail asynchronous
          await transporter.sendMail(mailOptions);

          // Send response after email is sent
          res.status(200).json({
            status: `Email sent successfully`,
            otp,
            id,
          });
        } catch (error) {
          console.error("Error sending email:", error);

          res.status(500).json({
            status: "Error",
            message: "Failed to send email",
            error: error.message,
          });
        }
      } else {
        res.status(200).json({
          status: "user not found",
        });
      }
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  forget_pass = async (req, res) => {
    try {
      var password = await bcrypt.hash(req.body.password, 10);
      req.body.password = password;
      var id = req.params.id;
      var data = await userModel.findByIdAndUpdate(id, req.body);

      res.status(200).json({
        status: "gym not found",
        data,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };
}

module.exports = new user_auth_ViewModel();
