import { ObjectId } from "mongodb";

import { usersCollection } from "../../database/db.js";
import { anunciosCollection } from "../../database/db.js";
import { carrinhoCollection } from "../../database/db.js";

export async function adicionarCarrinho(req, res) {
  const { user } = res.locals;
  const { id } = req.params;

  try {
    const findAnuncio = await anunciosCollection.findOne({
      _id: new ObjectId(id),
    });
    if (!findAnuncio) {
      return res.sendStatus(404);
    }

    const findUser = await usersCollection.findOne({ name: user.name });
    if (!findUser) {
      return res.sendStatus(404);
    }

    await carrinhoCollection.insertOne({
      ...findAnuncio,
      comprador: user.name,
    });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
