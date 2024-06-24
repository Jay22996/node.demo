var gym = require("../../../Model/gymModel/gymmodel");
var address = require("../../../Model/gymModel/Gymaddress");

class address_ViewModel {
  add_address = async (req, res) => {
    try {
      var id = req.params.id;
      req.body.gym_id = id;
      var data = await address.create(req.body);
      var data5 = await gym.findById(id);
      var gymid = data5._id;

      var gym_address_id = data._id;
      req.body.address = gym_address_id;
      var data1 = await gym.findByIdAndUpdate(gymid, req.body);
      res.status(200).json({
        status: "add address",
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

  update_address = async (req, res) => {
    try {
      var id = req.params.id;

      var data = await address.findByIdAndUpdate(id, req.body);

      res.status(200).json({
        status: "update address",
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

module.exports = new address_ViewModel();
