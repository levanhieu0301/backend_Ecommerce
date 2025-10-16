import { Router } from "express";
import dashboardRoute from "./dashboard.route"
import articleRoute from "./article.route"
const router = Router();

router.use("/dashboard", dashboardRoute)
router.use("/article", articleRoute)

export default router;