import { PrismaClient } from "@prisma/client";
import express from "express";

import { authRouter } from "./routers";


const prisma = new PrismaClient();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/auth",authRouter)



app.listen(Number(port), "0.0.0.0", () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
