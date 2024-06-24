var express = require("express");
const { showinvoicebyuser, showinvoicebygym, showinvoice, updatewinvoice, createinvoice, createinvoicee } = require("../../Controller/invoice/invoice_controller");
var router = express.Router();

//show user all invoice
router.get("/showinvoiceuser/:id", showinvoicebyuser);

//show gym all invoice
router.get("/showinvoicegym/:id", showinvoicebygym);

//show all invoice
router.get("/showinvoice", showinvoice);

//update invoice
router.post("/updateinvoice/:id", updatewinvoice);

//create invoice
router.post("/createinvoice/:id", createinvoice);

//create invoice in web
router.post("/createinvoiceweb/:id", createinvoicee);

module.exports = router;
