import { Response } from "express";



export const send=(res:Response,status:number,msg:string,payload:object,err?:string)=>{
    res.status(status).send({status,msg,data:payload,err})
}