const express = require("express");

const db = require("../data/helpers/projectModel");

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
        res.status(500).json({ message: "Fatal error, try later. "});
    })
})

router.post("/", (req, res) => {
    const project = req.body;
    console.log(project);

    db.insert(project)
    .then(response => {
        console.log(response);
        res.status(201).json({ message: "Successfully posted!" });
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ message: "Fatal error, try later. "});
    })
})

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const changes = req.body;
    console.log(id, changes);

    db.update(id, changes)
    .then(response => {
        console.log(response);
        res.status(200).json({ message: "Successfully posted!", response });
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ message: "Fatal error, try later. "});
    })
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    // console.log(id);

    db.remove(id)
    .then(response => {
        console.log(response);
        res.status(200).json({ message: `Successfully removed id: ${id}!` });
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ message: "Fatal error, try later. "});
    })
})

router.get("/:id/actions", (req, res) => {
    const projectId = req.params.id;
    console.log(projectId)

    db.getProjectActions(projectId)
    .then(response => {
        console.log(response);
        res.status(200).json(response);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ message: "Fatal error, try later. "});
    })
}) // ?????????????????????????????????



module.exports = router;