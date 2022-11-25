import {anunciosCollection} from "../../database/db.js";

export async function todosAnuncios(req, res) {
    const { user } = res.locals;
    
    try {
        const anuncios = await anunciosCollection.find().toArray();

        res.status(200).send(anuncios);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
        return;
    }
}