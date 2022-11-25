import dayjs from "dayjs";

import {anunciosCollection} from "../../database/db.js";

export async function novoAnuncioControll (req, res) {
    const {value, description, image} = req.body 
    const {user} = res.locals;

    try {
        const novoAnuncio = {
            value,
            description,
            image,
            user: user.name,
            date: dayjs(Date.now()).format("DD/MM"),
        }
        
        await anunciosCollection.insertOne(novoAnuncio);

        res.status(200).send(novoAnuncio);
        
    } catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }
}