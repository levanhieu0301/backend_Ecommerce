import * as dashboardController from "../../controllers/admin/dashboard.controller"
import { Router } from "express"
const router = Router();

router.get('/',dashboardController.dashboardController )


export default router;