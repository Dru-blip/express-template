import { NextFunction,Request,Response } from "express";
import jwt from "jsonwebtoken"


export const isAuthenticated=(req:Request,res:Response,next:NextFunction)=>{
    const authorization=req.headers.authorization
  
    const token=authorization?.split(" ")[1] as string
    if(!token){
        res.status(401).send({msg:"no token found"})
        return
    }
    try{
        let payload=jwt.verify(token,process.env.JWT_SECRET as string)
        if(!payload){
            res.status(403).send({msg:"invalid token"})
        }
        next()
    }catch{
        res.send({
            msg:"error validating token"
        })
    } 
}