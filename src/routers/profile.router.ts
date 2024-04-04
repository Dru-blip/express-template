import { Router } from "express";
import { isAuthenticated } from "../middleware/auth.middleware";
import { profileController } from "../controllers";



const profileRouter=Router()

profileRouter.get("/",isAuthenticated,profileController.getProfile)


export default profileRouter