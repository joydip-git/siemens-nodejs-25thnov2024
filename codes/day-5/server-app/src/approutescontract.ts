import { Router } from "express";

export interface AppRoutesContract {
    getRegisteredRoutes(): Router;
}