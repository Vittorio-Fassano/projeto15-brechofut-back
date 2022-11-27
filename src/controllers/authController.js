import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

import { usersCollection, sessionsCollection } from "../database/db.js";

//signup
export async function signUp(req, res) {
  const { name, email, password } = req.body;
  const passwordHash = bcrypt.hashSync(password, 10);

  try {
    await usersCollection.insertOne({ name, email, password: passwordHash });
    res.sendStatus(201);
  } catch (err) {
    return res.status(500).send(err);
  }
}

//signin
export async function signIn(req, res) {
  try {
    const token = uuidv4();
    const { user } = res.locals;

    await sessionsCollection.insertOne({ userId: user._id, token });
    res.status(200).send({ name: user.name, email: user.email, token });
  } catch (err) {
    return res.status(500).send(err);
  }
}
