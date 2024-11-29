import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";
import diContainer from "./IoC/inversify.config";
import diTokens from "./utilities/app-constants";
import { AppRoutesContract } from "./routes/app-routes.contract";

config()

const PORT = process.env.PORT || 4000

const PRODUCTS_BASE_URL = process.env.PRODUCTS_BASE_URL || 'products'
const AUTH_BASE_URL = process.env.AUTH_BASE_URL || 'auth'

const app = express()
app.use(cors({ origin: '*', methods: '*', allowedHeaders: '*' }))
app.use(json())

const appRoutes = diContainer.get<AppRoutesContract>(diTokens.APP_ROUTES_TOKEN)
app.use(appRoutes.registerRoutes())

app.listen(
    PORT,
    () => {
        console.log(`product server is running at http://localhost:${PORT}${PRODUCTS_BASE_URL}`)
        console.log(`auth server is running at http://localhost:${PORT}${AUTH_BASE_URL}`)
    }
)