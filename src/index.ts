
import express from "express";
import  auth from "./auth"

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/auth",auth.router)


app.listen(Number(port), "0.0.0.0", () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
