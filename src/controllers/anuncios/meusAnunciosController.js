import {anunciosCollection} from "../../database/db.js";

export async function meusAnuncios(req, res) {
    const {user} = res.locals;

    try {
        const findAnuncios = await anunciosCollection.find({user: user.name}).toArray();
        if (!findAnuncios) { return res.sendStatus(404) };

        res.status(200).send(findAnuncios);
    } catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }
}