import sha1 from 'sha1';

import dbClient from '../utils/db';

class Usercontroller {
  static async postNew(req, res) {
    const { email, password } = req.body;
    if (!email) {
      res.status(400).send({ error: 'Missing email' });
    }
    if (!password) {
      res.status(400).send({ error: 'Missing password' });
    }
    const hashpass = sha1(password);
    try {
      const query = await dbClient.db.collection('users').findOne({ email });
      const collection = dbClient.db.collection('users');
      if (query) {
        res.status(400).send({ error: 'Already exist' });
      } else {
        collection.insertOne({ email, password: hashpass });
        const newUser = await collection.findOne(
          { email }, { projection: { email: 1 } },
        );
        res.status(201).send({ id: newUser._id, email: newUser.email });
      }
    } catch (error) {
      console.log(error);
    }
  }
}
export default Usercontroller;
