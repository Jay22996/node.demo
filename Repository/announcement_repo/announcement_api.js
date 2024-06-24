var msg = require("../../Model/gymModel/announcement_model");

class AllannouncementModel {
    //add announcement
    announcement = async (req, res) => {
        try {
            var id = req.params.id;
            var data = await msg.findOneAndUpdate(
                { gym_id: id },
                { $push: { message: { messages: req.body.messages } } }
            );
            res.status(200).json({
                status: "add",
                data,
            });
        } catch (error) {
            res.status(500).json({
                status: "error",
                message: error.message,
            });
        }
    };

    //find exercise
    announcementfind = async (req, res) => {
        try {
            var id = req.params.id;
            var data = await msg.find({ gym_id: id });
            res.status(200).json({
                status: "find",
                data,
            });
        } catch (error) {
            res.status(500).json({
                status: "error",
                message: error.message,
            });
        }
    };

    //update exercise
    announcementupdate = async (req, res) => {
        try {
            var id = req.params.id;
            var data1 = await msg.findOneAndUpdate(
                { gym_id: id },
                { $pull: { message: { _id: req.body.id } } }
            );
            var data = await msg.findOneAndUpdate(
                { gym_id: id },
                { $push: { message: { messages: req.body.messages } } }
            );
        } catch (error) {
            res.status(500).json({
                status: "error",
                message: error.message,
            });
        }
    };

    //delete  announcement
    announcementdelete = async (req, res) => {
        try {
            var id = req.params.id;
            var data = await msg.findOneAndUpdate(
                { gym_id: id },
                { $pull: { message: { _id: req.body.id } } }
            );
            res.status(200).json({
                status: "delete",
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

module.exports = new AllannouncementModel();
