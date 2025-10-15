import * as homeController from "../../controllers/client/home.controller";
import { Router } from "express";
const router = Router(); 

router.get('/', homeController.homeController)

export default router;