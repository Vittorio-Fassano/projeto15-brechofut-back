import {ObjectId} from 'mongodb';

import {anunciosCollection} from "../../database/db.js";

export async function deleteAnuncio(req, res) {
    const {id} = req.params;

    try {
        const findAnuncio = await anunciosCollection.findOne({_id: new ObjectId(id)});
        if (!findAnuncio) { return res.sendStatus(404) };

        const deleteAnuncio = await anunciosCollection.deleteOne({_id: findAnuncio._id});

        res.status(200).send(deleteAnuncio);
    } catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }
}   