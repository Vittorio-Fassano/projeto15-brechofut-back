import {ObjectId} from 'mongodb';

import {carrinhoCollection} from "../../database/db.js";

export async function deleteProduto(req, res) {
    const {id} = req.params;

    try {
        const findProduto = await carrinhoCollection.findOne({_id: new ObjectId(id)});
        if (!findProduto) { return res.sendStatus(404) };
        console.log(findProduto);

        const deleteProduto = await carrinhoCollection.deleteOne({_id: findProduto._id});

        res.status(200).send(deleteProduto);
    } catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }
}   