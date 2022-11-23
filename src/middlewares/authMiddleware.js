import Joi from 'joi';

import {usersCollection} from "../database/db.js";
import {signUpSchema} from "../models/authSchemas.js";

export async function validatingSignUp (req, res, next) {
    const { name, email, password, confirmedPassword } = req.body;

    const { error } = signUpSchema.validate(req.body, { abortEarly: false });  

    if(error) {
        const errors = error.details.map((detail) => detail.message);
        console.log(errors);
        return res.status(400).send(errors);
    }

    try {
        const emailAlreadyExist = await usersCollection.findOne({email});
        const userAlreadyExist = await usersCollection.findOne({name});

        if (emailAlreadyExist || userAlreadyExist) { return res.status(409).send("Erro ao cadastrar");}

        next(); 

    } catch (err) {
        console.log(err)
        return res.sendStatus(500);
    }
}