var gym = require("../../../Model/gymModel/gymmodel");
const bcrypt = require("bcryptjs");
const otpGenerator = require("otp-generator");
var nodemailer = require("nodemailer");

class gym_auth_ViewModel {
  Logingym = async (req, res) => {
    try {
      var find = await gym.find({ email: req.body.email });
      if (find.length === 1) {
        const isPasswordMatch = await bcrypt.compare(
          req.body.password,
          find[0].password
        );
        if (isPasswordMatch) {
          res.status(200).json({
            status: "gym logged in",
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
    var email = req.body.email;
    var data = await gym.findOne({ email: email });
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
        status: "gym not found",
      });
    }
  };

  forget_pass = async (req, res) => {
    try {
      var password = await bcrypt.hash(req.body.password, 10);
      req.body.password = password;
      var id = req.params.id;
      var data = await gym.findByIdAndUpdate(id, req.body);

      res.status(200).json({
        status: "done",
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

module.exports = new gym_auth_ViewModel();
