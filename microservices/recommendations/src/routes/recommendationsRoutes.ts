import express from "express";
const router = express.Router();
const recommnedationsController = require('../controllers/recommendationsController');

// Calculate recommendations
router.post('/CalculateRecommendations', recommnedationsController.calculateRecommendations);

// Update recommendations details
// router.put('/recommendations/:id', recommendationsController.updateRecommendations);

// Remove a recommendations
// router.delete('/recommendations/:id', recommendationsController.removeRecommendations);

module.exports = router;
