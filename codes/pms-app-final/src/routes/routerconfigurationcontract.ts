import { Router } from "express";

export interface RouterConfigurationContract {
    getRegisteredRoutes(): Router;
}