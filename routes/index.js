import express from 'express';
import Appcontoller from '../controllers/AppController';

const router = express.Router();

router.get('/status', (req, res) => {
  Appcontoller.getStatue(req, res);
});
router.get('/stats', (req, res) => {
  Appcontoller.getStats(req, res);
});

export default router;
