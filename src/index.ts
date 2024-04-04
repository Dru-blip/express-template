import { PrismaClient } from "@prisma/client";
import express from "express";

import { authRouter, profileRouter } from "./routers";




const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


app.use("/profile",profileRouter)
app.use("/auth",authRouter)




app.listen(Number(port), "0.0.0.0", () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
