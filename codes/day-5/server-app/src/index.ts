import express, { json } from "express";
import cors from "cors";
import appcontainer from "./appcontainer";
import { AppRoutesContract } from "./approutescontract";
import { APP_TOKENS } from "./tokens";

const app = express()

app.use(cors({ allowedHeaders: '*', methods: '*', origin: '*' }))
app.use(json())
const appRouter = appcontainer.get<AppRoutesContract>(APP_TOKENS.APP_ROUTES_TOKEN)
app.use(appRouter.getRegisteredRoutes())

app.listen(3000, () => console.log('server is listening to port 3000'))