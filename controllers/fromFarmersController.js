// fromFarmersController.js
const FromFarmers = require('../models/fromFarmers');

exports.createFromFarmers = async (req, res) => {
    try {
        const newFromFarmers = new FromFarmers(req.body);
        const savedFromFarmers = await newFromFarmers.save();
        res.status(201).json(savedFromFarmers);
    } catch (error) {
        res.status(400).json({ message: 'Error creating FromFarmers', error });
    }
};

exports.getAllFromFarmers = async (req, res) => {
    try {
        const fromFarmers = await FromFarmers.find();
        res.status(200).json(fromFarmers);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving FromFarmers', error });
    }
};

exports.getFromFarmersById = async (req, res) => {
    try {
        const fromFarmers = await FromFarmers.findOne({ _id: req.params.fromFarmers_id });
        if (!fromFarmers) {
            res.status(404).json({ message: 'FromFarmers not found' });
        } else {
            res.status(200).json(fromFarmers);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving FromFarmers', error });
    }
};

exports.updateFromFarmers = async (req, res) => {
    try {
        const updatedFromFarmers = await FromFarmers.findOneAndUpdate(
            { _id: req.params.fromFarmers_id },
            req.body,
            { new: true }
        );
        if (!updatedFromFarmers) {
            res.status(404).json({ message: 'FromFarmers not found' });
        } else {
            res.status(200).json(updatedFromFarmers);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating FromFarmers', error });
    }
};

exports.deleteFromFarmers = async (req, res) => {
    try {
        const deletedFromFarmers = await FromFarmers.findOneAndDelete({ _id: req.params.fromFarmers_id });
        if (!deletedFromFarmers) {
            res.status(404).json({ message: 'FromFarmers not found' });
        } else {
            res.status(200).json(deletedFromFarmers);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting FromFarmers', error });
    }
};
