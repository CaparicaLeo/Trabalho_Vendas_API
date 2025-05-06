import { Router } from "express";
import UsersController from "../controllers/UsersController";

const userRoutes = Router();
const usersController = new UsersController();
userRoutes.get("/", async (req, res, next) => {
	try {
		await usersController.index(req, res, next);
	} catch (err) {
		next(err);
	}
});
