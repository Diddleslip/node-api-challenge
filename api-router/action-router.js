const express = require("express");

const db = require("../data/helpers/actionModel");

const router = express.Router();

router.use(express.json());

// .then(response => {
//     console.log(response);
// })
// .catch(error => {
//     console.log(error);
// })

router.get("/", (req, res) => {
    console.log("Hello from FIRST GET!");

    db.get()
    .then(response => {
        res.status(200).json(response);
        console.log(response);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ message: "Fatal error, try later. "});
    })
})

router.post("/:id", (req, res) => {
    const project_id = req.params.id;
    const {description, notes} = req.body;

    db.insert({description, project_id, notes})
    .then(response => {
        res.status(201).json(response);
        console.log(response);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ message: "Fatal error, try later. "});
    })
})

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    db.update(id, changes)
    .then(response => {
        res.status(200).json(response);
        console.log(response);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ message: "Fatal error, try later. "});
    })
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    
    db.remove(id)
    .then(response => {
        res.status(200).json(response);
        console.log(response);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ message: "Fatal error, try later. "});
    })
})


module.exports = router;