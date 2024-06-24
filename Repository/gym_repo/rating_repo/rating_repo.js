var rating = require("../../../Model/gymUserModel/Ratingmodel");
var gym = require("../../../Model/gymModel/gymmodel");

class ratting_ViewModel {
  rating = async (req, res) => {
    try {
      var gt_id = req.params.id;
      req.body.gt_id = gt_id;
      var userid = req.params.uid;
      req.body.user_id = userid;
      var ratingg = parseFloat(req.body.rating);
      var ratting1 = Math.round(ratingg);
      if (req.body.rating == 0 || req.body.rating == 0.0) {
        ratting1 = 1;
      }

      // console.log(ratting1)
      req.body.rating = ratting1;
      var data = await rating.create(req.body);
      var data5 = data._id;

      var data2 = await gym.findById(gt_id);
      var total_rating = data2.total_rating;
      var averageRating = data2.averageRating;
      var tempavreg =
        (total_rating * averageRating + req.body.rating) / (total_rating + 1);

      var data1 = await gym.findByIdAndUpdate(gt_id, {
        $inc: { total_rating: 1 },
        $set: { averageRating: tempavreg },
        $push: { rating: { ratingid: data5, user_id: userid } },
      });
      res.status(200).json({
        status: "ratting add",
        data,
        data1,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  findretting = async (req, res) => {
    try {
      var id = req.params.id;
      var data = await rating.find({ gt_id: id }).populate("user_id");
      res.status(200).json({
        status: "rating find",
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

module.exports = new ratting_ViewModel();
