// adminController.js
const Admin = require('../models/admin'); // Assuming the Admin model is in the same directory

// Create operation
exports.createAdmin = async (req, res) => {
    try {
        const adminData = req.body;
        const newAdmin = await Admin.create(adminData);
        res.status(201).json(newAdmin);
    } catch (error) {
        console.error('Error creating admin:', error);
        res.status(400).json({ message: 'Error creating admin', error });
    }
};

// Read one operation
exports.getAdminById = async (req, res) => {
    try {
        const adminId = req.params.admin_id;
        const admin = await Admin.findById(adminId);
        if (!admin) {
            return res.status(404).json({ error: 'Admin not found' });
        }
        res.status(200).json(admin);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Read all operation
exports.getAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.find();
        res.status(200).json(admins);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Update operation
exports.updateAdmin = async (req, res) => {
    try {
        const adminId = req.params.admin_id;
        const updatedAdminData = req.body;
        const updatedAdmin = await Admin.findByIdAndUpdate(adminId, updatedAdminData, { new: true });
        if (!updatedAdmin) {
            return res.status(404).json({ error: 'Admin not found' });
        }
        res.status(200).json(updatedAdmin);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Delete operation
exports.deleteAdmin = async (req, res) => {
    try {
        const adminId = req.params.admin_id;
        const deletedAdmin = await Admin.findByIdAndDelete(adminId);
        if (!deletedAdmin) {
            return res.status(404).json({ error: 'Admin not found' });
        }
        res.status(200).end(); // No content
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
