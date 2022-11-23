import bcrypt from 'bcrypt';

import {usersCollection} from "../database/db.js";
import {signUpSchema, signInSchema} from "../models/authSchemas.js";


//signup
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

        if (emailAlreadyExist || userAlreadyExist) { return res.status(409).send("Erro ao cadastrar!");}

        next(); 

    } catch (err) {
        console.log(err)
        return res.sendStatus(500);
    }
}


//signin
export async function validatingSignIn (req, res, next) {
    const { email, password} = req.body;

    const { error } = signInSchema.validate(req.body, { abortEarly: false }); 

    if(error) {
        const errors = error.details.map((detail) => detail.message);
        console.log(errors);
        return res.status(400).send(errors);
    }

    try {
        const user =  await usersCollection.findOne({email});
        const validatingPassword = user && bcrypt.compareSync(password, user.password);

        if (!user || !validatingPassword) {return res.status(422).send("Erro ao entrar!");}

        res.locals.user = user; 

        next(); 

    } catch (err) {
        console.log(err)
        return res.sendStatus(500);
    }
}