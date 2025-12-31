const express = require('express');
const upload = require('../middlewares/upload.middleware.js');
const controller = require("../controllers/event.controller.js");

const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get events
 *     description: Get a single event by id or list events with optional pagination and sorting
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         description: The unique ID of the event
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *           enum: [latest]
 *         description: Get latest events sorted by schedule
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of events per page
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *     responses:
 *       200:
 *         description: List of events or a single event
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get("/", controller.getEvents);

/**
 * @swagger
 * /:
 *   post:
 *     summary: Create a new event
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               uid:
 *                 type: string
 *               name:
 *                 type: string
 *               tagline:
 *                 type: string
 *               schedule:
 *                 type: string
 *                 format: date-time
 *               description:
 *                 type: string
 *               moderator:
 *                 type: string
 *               category:
 *                 type: string
 *               sub_category:
 *                 type: string
 *               rigor_rank:
 *                 type: integer
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Event created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 event_id:
 *                   type: string
 */
router.post("/", upload.single("image"), controller.createEvent);

/**
 * @swagger
 * /{id}:
 *   put:
 *     summary: Update an existing event
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Event ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               tagline:
 *                 type: string
 *               schedule:
 *                 type: string
 *                 format: date-time
 *               description:
 *                 type: string
 *               moderator:
 *                 type: string
 *               category:
 *                 type: string
 *               sub_category:
 *                 type: string
 *               rigor_rank:
 *                 type: integer
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Event updated successfully
 */
router.put("/:id", upload.single("image"), controller.updateEvent);

/**
 * @swagger
 * /{id}:
 *   delete:
 *     summary: Delete an event
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Event ID
 *     responses:
 *       200:
 *         description: Event deleted successfully
 */
router.delete("/:id", controller.deleteEvent);

module.exports = router;