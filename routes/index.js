import express from 'express';
import Appcontoller from '../controllers/AppController';
import Usercontroller from '../controllers/UsersController';

const router = express.Router();

router.get('/status', (req, res) => {
  Appcontoller.getStatue(req, res);
});
router.get('/stats', (req, res) => {
  Appcontoller.getStats(req, res);
});
router.post('/users', (req, res) => {
  Usercontroller.postNew(req, res);
});
export default router;
