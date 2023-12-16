// loveOfOurLadiesController.js
const LoveOfOurLadies = require('../models/loveOfOurLadies');

exports.createLoveOfOurLadies = async (req, res) => {
    try {
        const newLoveOfOurLadies = new LoveOfOurLadies(req.body);
        console.log("***********************");
        console.log(newLoveOfOurLadies);
        const savedLoveOfOurLadies = await newLoveOfOurLadies.save();
        res.status(201).json(savedLoveOfOurLadies);
        console.log("LoveOfOur Ladies products created successfully");
    } catch (error) {
        res.status(400).json({ message: 'Error creating LoveOfOurLadies', error });
    }
};

exports.getAllLoveOfOurLadies = async (req, res) => {
    try {
        const loveOfOurLadies = await LoveOfOurLadies.find();
        res.status(200).json(loveOfOurLadies);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving LoveOfOurLadies', error });
    }
};

exports.getLoveOfOurLadiesById = async (req, res) => {
    try {
        const loveOfOurLadies = await LoveOfOurLadies.findOne({ _id: req.params.loveOfOurLadies_id });
        if (!loveOfOurLadies) {
            res.status(404).json({ message: 'LoveOfOurLadies not found' });
        } else {
            res.status(200).json(loveOfOurLadies);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving LoveOfOurLadies', error });
    }
};

exports.updateLoveOfOurLadies = async (req, res) => {
    try {
        const updatedLoveOfOurLadies = await LoveOfOurLadies.findOneAndUpdate(
            { _id: req.params.loveOfOurLadies_id },
            req.body, 
            { new: true }
        );
        if (!updatedLoveOfOurLadies) {
            res.status(404).json({ message: 'LoveOfOurLadies not found' });
        } else {
            res.status(200).json(updatedLoveOfOurLadies);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating LoveOfOurLadies', error });
    }
};

exports.deleteLoveOfOurLadies = async (req, res) => {
    try {
        const deletedLoveOfOurLadies = await LoveOfOurLadies.findOneAndDelete({
            _id: req.params.loveOfOurLadies_id
        });
        if (!deletedLoveOfOurLadies) {
            res.status(404).json({ message: 'LoveOfOurLadies not found' });
        } else {
            res.status(200).json(deletedLoveOfOurLadies);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting LoveOfOurLadies', error });
    }
};
