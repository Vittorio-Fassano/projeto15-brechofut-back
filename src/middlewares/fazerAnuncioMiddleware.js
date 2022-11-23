import {novoAnuncioSchema} from "../models/fazerAnuncioSchema.js";

export async function validatingNovoAnuncio(req, res, next) {
    const { value, description, image } = req.body;

    const { error } = novoAnuncioSchema.validate(req.body, { abortEarly: false });  

    if(error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }
    
    next();
}