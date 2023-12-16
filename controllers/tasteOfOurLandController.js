// tasteOfOurLandController.js
const TasteOfOurLand = require('../models/tasteOfOurLand');

exports.createTasteOfOurLand = async (req, res) => {
    try {
        const newTasteOfOurLand = new TasteOfOurLand(req.body);
        console.log("***********************");
        console.log(newTasteOfOurLand);
        const savedTasteOfOurLand = await newTasteOfOurLand.save();
        res.status(201).json(savedTasteOfOurLand);
        
        console.log("TasteOfOurLand products created successfully");
    } catch (error) {
        res.status(400).json({ message: 'Error creating TasteOfOurLand', error });
    }
};

exports.getAllTasteOfOurLand = async (req, res) => {
    try {
        const tasteOfOurLand = await TasteOfOurLand.find();
        res.status(200).json(tasteOfOurLand);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving TasteOfOurLand', error });
    }
};

exports.getTasteOfOurLandById = async (req, res) => {
    try {
        const tasteOfOurLand = await TasteOfOurLand.findOne({ _id: req.params.tasteOfOurLand_id });
        if (!tasteOfOurLand) {
            res.status(404).json({ message: 'TasteOfOurLand not found' });
        } else {
            res.status(200).json(tasteOfOurLand);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving TasteOfOurLand', error });
    }
};


exports.updateTasteOfOurLand = async (req, res) => {
    try {
        const updatedTasteOfOurLand = await TasteOfOurLand.findOneAndUpdate(
            { _id: req.params.tasteOfOurLand_id },
            req.body,
            { new: true }
        );
        if (!updatedTasteOfOurLand) {
            res.status(404).json({ message: 'TasteOfOurLand not found' });
        } else {
            res.status(200).json(updatedTasteOfOurLand);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating TasteOfOurLand', error });
    }
};



exports.deleteTasteOfOurLand = async (req, res) => {
    try {
        const deletedTasteOfOurLand = await TasteOfOurLand.findOneAndDelete({
            _id: req.params.tasteOfOurLand_id
        });
        if (!deletedTasteOfOurLand) {
            res.status(404).json({ message: 'TasteOfOurLand not found' });
        } else {
            res.status(200).json(deletedTasteOfOurLand);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting TasteOfOurLand', error });
    }
};
