const express = require("express");
const Vehicle = require("../models/vehicle");

const router = express.Router();

router.post("/", async (req, res) => {
  // Create a new vehicle
  console.log(req.body);
  const vehicle = new Vehicle(req.body);
  return vehicle
    .save()
    .then(item => {
      console.log(item);
      return res.status(201).json({ msg: "vehicle created successfull" });
    })
    .catch(() => {
      return res.status(404).json({ msg: "vehicle not created" });
    });
});

router.get("/", (_req, res) => {
  //get all users
  Vehicle.find()
    .then(vehicleData => {
      return res.status(200).json({ vehicleData });
    })
    .catch(err => {
      return res.status(500).json({ msg: `err occour: ${err}` });
    });
});

router.get("/:id", (req, res) => {
  //get single vehicle by id
  const id = req.params.id;
  Vehicle.findOne({ _id: id })
    .then(vehicleData => {
      if (vehicleData) {
        return res.status(200).json(vehicleData);
      }
      return res
        .status(404)
        .json({ msg: `no vehicle found with the this ID:${id} ` });
    })
    .catch(err => {
      return res.status(500).json({ msg: `err occour: ${err}` });
    });
});

//update vehicle
router.patch("/:id", (req, res) => {
  //get values from frontend
  const vehicleID = req.params.id;
  const vehicleBody = req.body;

  return Vehicle.update({ _id: vehicleID }, { $set: vehicleBody })
    .then(vehicle => {
      console.log(vehicle);
      return res.status(201).json({ msg: "vehicle updated successfully" });
    })
    .catch(err => {
      res.status(404).json({ msg: "vehicle with the ID not found" });
      console.log(err);
      return;
    });
});

//get delete a  vehicle
router.delete("/:id", (req, res) => {
  const vehicleID = req.params.id;

  return Vehicle.findByIdAndDelete(vehicleID)
    .then(vehicle => {
      console.log(vehicle);
      return res.status(200).json({ msg: "vehicle deleted" });
    })
    .catch(err => {
      res.status(404).json({ msg: "vehicle with the ID not found" });
      console.log(err);
      return;
    });
});

module.exports = router;
