import { PrismaClient } from "@prisma/client";


declare global{
var __db:PrismaClient|undefined
}

let db:PrismaClient

if(!global.__db){
    global.__db=new PrismaClient()
}

db=global.__db

export default db