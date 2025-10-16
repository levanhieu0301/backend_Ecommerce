import { Router } from "express";
import * as articleController from "../../controllers/admin/article.controller"
import * as validateArticle from "../../middlewares/admin/validate.article"
import multer from "multer";
const router = Router();
const upload = multer();


router.get("/category", articleController.articleCategory)
router.get("/category/create", articleController.articleCategoryCreate)
router.post(
  "/category/create",
  upload.none(),
  validateArticle.createCategoryPost, 
  articleController.articleCategoryCreatePost
)

export default router;