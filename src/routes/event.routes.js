const express = require('express');
const upload = require('../middlewares/upload.middleware.js');
const controller = require("../controllers/event.controller.js");

const router = express.Router();

router.get("/", controller.getEvents);
router.post("/", upload.single("image"), controller.createEvent);
router.put("/:id", upload.single("image"), controller.updateEvent);
router.delete("/:id", controller.deleteEvent);

module.exports = router;