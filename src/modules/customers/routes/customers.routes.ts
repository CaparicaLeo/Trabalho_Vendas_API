import { Router } from "express";
import CustomersController from "../controllers/CustomersController";
import isAuthenticated from "@shared/middlewares/isAuthenticated";

const customersRouter = Router()
const customersController = new CustomersController();
customersRouter.use(isAuthenticated);