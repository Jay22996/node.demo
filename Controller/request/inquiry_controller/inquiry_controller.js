const { inquirysend, inquirydelete, inquiryfind, inquiryactione, inquiryactioneupdate } = require("../../../Repository/request_repo/inquiry_repo/inquiry_repo");


exports.inquirysend = async (req, res) => {
    inquirysend(req, res)
};

exports.inquirydelete = async (req, res) => {
    inquirydelete(req, res)
};

exports.inquiryfind = async (req, res) => {
    inquiryfind(req, res)
};

exports.inquiryactione = async (req, res) => {
    inquiryactione(req, res)
};

exports.inquiryactioneupdate = async (req, res) => {
    inquiryactioneupdate(req, res)
};
