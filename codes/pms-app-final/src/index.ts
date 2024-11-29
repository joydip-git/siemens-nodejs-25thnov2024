import express, { json } from "express";
import cors from "cors";
import appcontainer from "./utils/appcontainer";
import { RouterConfigurationContract } from "./routes/routerconfigurationcontract";
import { DI_TOKENS } from "./utils/constants";

import { config } from "dotenv";
config()
const PORT = process.env.SERVER_PORT

const app = express()

app.use(cors({ allowedHeaders: '*', methods: '*', origin: '*' }))
app.use(json())
const appRouter = appcontainer.get<RouterConfigurationContract>(DI_TOKENS.APP_ROUTES_TOKEN)
app.use(appRouter.getRegisteredRoutes())

app.listen(PORT, () => console.log('server is listening to port ' + PORT))