const { sendreq, acceptreq, showreq, delete_reqq } = require("../../../Repository/request_repo/trainer_req_repo/trainer_req_repo");


exports.sendreq = async (req, res) => {
    sendreq(req, res)
};

exports.acceptreq = async (req, res) => {
    acceptreq(req, res)
 
};

exports.showreq = async (req, res) => {
    showreq(req, res)
  
};

exports.delete_reqq = async (req, res) => {
    delete_reqq(req, res)
  
};
