import { Request, Response } from "express";
import bcrypt from "bcryptjs"
import db from "../lib/db";
import jwt from "jsonwebtoken"


export const login = async (req: Request, res: Response) => {

    const user_data = req.body['user']

    const user = await db.user.findFirst({
        where: {
            email: user_data['email']
        }
    })

    if (!user) {
        res.status(401).send({
            msg: "user not found",
        })
        return
    }

    if (!await bcrypt.compare(user_data['password'], user?.password)) {
        res.status(401).send({
            msg: "invalid password",
        })
        return
    }

    const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, process.env.JWT_SECRET as string)

    res.status(200).send({
        msg: "success",
        token
    })

}


export const register = async (req: Request, res: Response) => {
    const user_data = req.body['user']

    const hashed_password = await bcrypt.hash(user_data['password'], 10)

    const new_user = await db.user.create({
        data: {
            name: user_data['name'],
            password: hashed_password,
            email: user_data['email']
        }
    })

    const token = jwt.sign({ id: new_user.id, name: new_user.name, email: new_user.email }, process.env.JWT_SECRET as string)

    res.status(201).send({
        msg: "success",
        token
    })

}