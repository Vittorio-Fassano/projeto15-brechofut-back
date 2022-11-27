import { sessionsCollection, usersCollection } from "../database/db.js";

export async function validatingToken(req, res, next) {
  const { authorization } = req.headers;

  const token = authorization?.replace("Bearer ", "");
  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const session = await sessionsCollection.findOne({ token });
    if (!session) {
      return res.sendStatus(401);
    }

    const user = await usersCollection.findOne({ _id: session?.userId });

    if (!user) {
      return res.sendStatus(404);
    }

    delete user.password;
    delete user._id;

    res.locals.user = user;

    next();
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
