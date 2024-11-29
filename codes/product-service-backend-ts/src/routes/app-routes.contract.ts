import { Router } from "express";

export interface AppRoutesContract {
    registerRoutes(): Router;
}