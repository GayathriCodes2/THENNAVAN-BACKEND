// adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.post('/admin', adminController.createAdmin);
router.get('/admins', adminController.getAllAdmins);
router.get('/admin/:admin_id', adminController.getAdminById);
router.put('/admin/:admin_id', adminController.updateAdmin);
router.delete('/admin/:admin_id', adminController.deleteAdmin);

module.exports = router;
