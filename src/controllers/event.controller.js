const {objectId, ObjectId} = require('mongodb');
const {getDB} = require('../db.js');

const COLLECTION = "events"

exports.getEvents = async(req, res) => {
    const db = getDB();
    const { id, type, limit = 10, page = 1 } = req.query;

    try{
        if(id){
            const event = await db
                            .collection(COLLECTION)
                            .findOne({_id: new ObjectId(id)});
            
            return res.json(event);
        }

        let query = {};
        let cursor = db.collection(COLLECTION).find(query);

        if(type === 'latest'){
            cursor = cursor.sort({schedule: -1});
        }

        const events = await cursor
            .skip((page - 1) * limit)
            .limit(parseInt(limit))
            .toArray();

        res.json(events);
    }
    catch(err){
        res.status(500).json({ error: err.message });
    }
}

exports.createEvent = async (req, res) => {
    const db = getDB();

    const eventData = {
        type: "event",
        uid: req.body.uid,
        name: req.body.name,
        tagline: req.body.tagline,
        schedule: new Date(req.body.schedule),
        description: req.body.description,
        moderator: req.body.moderator,
        category: req.body.category,
        sub_category: req.body.sub_category,
        rigor_rank: parseInt(req.body.rigor_rank),
        attendees: [],
        files: {
            image: req.file ? `/uploads/${req.file.filename}` : null,
        },
        createdAt: new Date(),
    };

    const result = await db.collection(COLLECTION).insertOne(eventData);

    res.status(201).json({ event_id: result.insertedId });
};

exports.updateEvent = async (req, res) => {
    const db = getDB();
    const { id } = req.params;

    const updateData = {
        ...req.body,
    };

    if(req.file){
        updateData["files.image"] = `/uploads/${req.file.filename}`;
    }

    await db.collection(COLLECTION).updateOne(
        { _id: new ObjectId(id) },
        { $set: updateData }
    );

    res.json({ message: "Event updated" });
};

exports.deleteEvent = async (req, res) => {
    const db = getDB();
    const { id } = req.params;

    await db.collection(COLLECTION).deleteOne({
        _id: new ObjectId(id),
    });

    res.json({ message: "Event deleted" });
};