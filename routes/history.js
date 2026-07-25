const express = require("express");
const router = express.Router();

const History = require("../models/History");

router.post("/save", async (req, res) => {

    const history = new History({
        expression: req.body.expression,
        result: req.body.result
    });

    await history.save();

    res.json({
        message: "Saved Successfully"
    });

});

module.exports = router;