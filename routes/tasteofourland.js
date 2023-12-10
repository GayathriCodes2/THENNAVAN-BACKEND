// tasteOfOurLandRoutes.js
const express = require('express');
const router = express.Router();
const tasteOfOurLandController = require('../controllers/tasteOfOurLandController');

router.post('/tasteofourland', tasteOfOurLandController.createTasteOfOurLand);
router.get('/tasteofourlands', tasteOfOurLandController.getAllTasteOfOurLand);
router.get('/tasteofourland/:tasteOfOurLand_id', tasteOfOurLandController.getTasteOfOurLandById);
router.put('/tasteofourland/:tasteOfOurLand_id', tasteOfOurLandController.updateTasteOfOurLand);
router.delete('/tasteofourland/:tasteOfOurLand_id', tasteOfOurLandController.deleteTasteOfOurLand);

module.exports = router;
