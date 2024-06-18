import redisClient from '../utils/redis';
import dbClient from '../utils/db';

class Appcontoller {
  static getStatue(req, res) {
    try {
      const redis = redisClient.isAlive();
      const db = dbClient.isAlive();
      res.status(200).send({ redis, db });z
    } catch (error) {
      console.log(error);
    }
  }

  static async getStats(req, res) {
    try {
      const files = await dbClient.nbFiles();
      const users = await dbClient.nbUsers();
      res.status(200).send({ users, files });
    } catch (error) {
      console.log(error);
    }
  }
}
export default Appcontoller;
