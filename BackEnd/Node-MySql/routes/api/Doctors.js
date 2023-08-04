const express = require("express");
const router = express.Router();
const doctorController = require("../../controllers/doctorController");

router
.route("/")
.post(doctorController.addDoctor)
.get(doctorController.getDoctorsManifest)
.put(doctorController.updateDoctor)

router
.route('/:id')
.delete(doctorController.deleteDoctor);




module.exports = router;