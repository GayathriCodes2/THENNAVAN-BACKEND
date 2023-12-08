// adminController.js
const Admin = require('../models/admin');

exports.createAdmin = async (req, res) => {
    try {
        const newAdmin = new Admin(req.body);
        const savedAdmin = await newAdmin.save();
        res.status(201).json(savedAdmin);
    } catch (error) {
        res.status(400).json({ message: 'Error creating admin', error });
    }
};

exports.getAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.find();
        res.status(200).json(admins);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving admins', error });
    }
};

exports.getAdminById = async (req, res) => {
    try {
        const admin = await Admin.findOne({ _id: req.params.admin_id });
        if (!admin) {
            res.status(404).json({ message: 'Admin not found' });
        } else {
            res.status(200).json(admin);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving admin', error });
    }
};

exports.updateAdmin = async (req, res) => {
    try {
        const updatedAdmin = await Admin.findOneAndUpdate(
            { _id: req.params.admin_id },
            req.body,
            { new: true }
        );
        if (!updatedAdmin) {
            res.status(404).json({ message: 'Admin not found' });
        } else {
            res.status(200).json(updatedAdmin);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating admin', error });
    }
};

exports.deleteAdmin = async (req, res) => {
    try {
        const deletedAdmin = await Admin.findOneAndDelete({ _id: req.params.admin_id });
        if (!deletedAdmin) {
            res.status(404).json({ message: 'Admin not found' });
        } else {
            res.status(200).json(deletedAdmin);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting admin', error });
    }
};
