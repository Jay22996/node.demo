const { announcement, announcementfind, announcementupdate, announcementdelete } = require("../../Repository/announcement_repo/announcement_api");

exports.announcement = async (req, res) => {
  announcement(req, res);
};

exports.announcementdelete = async (req, res) => {
  announcementdelete(req, res);
};

exports.announcementfind = async (req, res) => {
  announcementfind(req, res);
};

exports.announcementupdate = async (req, res) => {
  announcementupdate(req, res);
  };
