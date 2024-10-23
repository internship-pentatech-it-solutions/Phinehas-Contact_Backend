const express = require("express");
const {
  getContact,
  postContact,
  updateName,
  updateEmail,
  updateDescription,
  deleteContact,
  updateMobile,
} = require("../controller/contactController");

const route = express.Router();

route.get("/contact", getContact);

route.post("/contact", postContact);

route.put("/contact/updateName/:id", updateName);
route.put("/contact/updateEmail/:id", updateEmail);
route.put("/contact/updateMobile/:id", updateMobile);
route.put("/contact/updateDescription/:id", updateDescription);

route.delete("/contact/:id", deleteContact);

module.exports = route;
