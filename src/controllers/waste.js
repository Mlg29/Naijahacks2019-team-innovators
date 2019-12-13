const express = require("express");
const Waste = require("../models/waste");

const router = express.Router();

router.post("/", async (req, res) => {
  // Create a new waste
  console.log(req.body);
  const waste = new Waste(req.body);
  return waste
    .save()
    .then(item => {
      console.log(item);
      return res.status(201).json({ msg: "waste created successfull" });
    })
    .catch(() => {
      return res.status(404).json({ msg: "waste not created" });
    });
});

router.get("/", (_req, res) => {
  //get all users
  Waste.find()
    .then(wasteData => {
      return res.status(200).json({ wasteData });
    })
    .catch(err => {
      return res.status(404).json({ msg: `err occour: ${err}` });
    });
});

router.get("/:id", (req, res) => {
  //get single waste by id
  const id = req.params.id;
  Waste.findOne({ _id: id })
    .then(wasteData => {
      if (wasteData) {
        return res.status(200).json(wasteData);
      }
      return res
        .status(404)
        .json({ msg: `no waste found with the this ID:${id} ` });
    })
    .catch(err => {
      return res.status(404).json({ msg: `err occour: ${err}` });
    });
});

//update waste
router.patch("/:id", (req, res) => {
  //get values from frontend
  const wasteID = req.params.id;
  const wasteBody = req.body;

  return Waste.update({ _id: wasteID }, { $set: wasteBody })
    .then(waste => {
      console.log(waste);
      return res.status(201).json({ msg: "waste updated successfully" });
    })
    .catch(err => {
      res.status(404).json({ msg: "waste with the ID not found" });
      console.log(err);
      return;
    });
});

//get delete a  waste
router.delete("/:id", (req, res) => {
  const wasteID = req.params.id;

  return Waste.findByIdAndDelete(wasteID)
    .then(waste => {
      console.log(waste);
      return res.status(200).json({ msg: "waste deleted" });
    })
    .catch(err => {
      res.status(404).json({ msg: "waste with the ID not found" });
      console.log(err);
      return;
    });
});

module.exports = router;
