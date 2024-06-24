const { showinvoicebyuser, showinvoicebygym, showinvoice, updatewinvoice, createinvoice, createinvoicee } = require("../../Repository/invoice_repo/invoice_repo");

exports.showinvoicebyuser = async (req, res) => {
  showinvoicebyuser(req, res);
};

exports.showinvoicebygym = async (req, res) => {
  showinvoicebygym(req, res);
};

exports.showinvoice = async (req, res) => {
  showinvoice(req, res);
};

exports.updatewinvoice = async (req, res) => {
  updatewinvoice(req, res);
};

exports.createinvoice = async (req, res) => {
  createinvoice(req, res);
};

exports.createinvoicee = async (req, res) => {
  createinvoicee(req, res);
};
