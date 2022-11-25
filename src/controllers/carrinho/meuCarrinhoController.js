import {carrinhoCollection} from "../../database/db.js";

export async function meuCarrinho(req, res) {
    const {user} = res.locals;

    try {
        const findCarrinho = await carrinhoCollection.find({comprador: user.name}).toArray();
        if (!findCarrinho) { return res.sendStatus(404) };
        console.log(findCarrinho);

        res.status(200).send(findCarrinho);
    } catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }
}