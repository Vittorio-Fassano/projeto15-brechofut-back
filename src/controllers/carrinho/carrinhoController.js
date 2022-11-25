import {ObjectId} from 'mongodb';

import {anunciosCollection} from "../../database/db.js";
import {carrinhoCollection} from "../../database/db.js";


export async function meuCarrinho  (req, res) {

    const {id} = req.params;
    
    try {
        const findAnuncio = await anunciosCollection.findOne({_id: new ObjectId(id)});
        if (!findAnuncio) { return res.sendStatus(404) };
        console.log(findAnuncio);

        await carrinhoCollection.insertOne({findAnuncio});
        res.sendStatus(200);
        
    } catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }
}