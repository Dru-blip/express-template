
import * as controller from "./auth.controller"
import authRouter from "./auth.router"
import * as middleware from "./auth.middleware"


export default {
    controller,
    router:authRouter,
    middleware
}