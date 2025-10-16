import { Request, Response } from "express"

export const articleCategory = (req: Request, res: Response) => {
  res.render('admin/pages/article-category',{
    pageTitle:"Quản lý danh mục bài viết"
  })
}

export const articleCategoryCreate = (req: Request, res: Response) => {
  res.render('admin/pages/article-create-category',{
    pageTitle:"Tạo danh mục bài viết"
  })
}
export const articleCategoryCreatePost = (req: Request, res: Response) => {
  console.log(req.body)
  res.json({
    code:"success",
    message:"Tạo danh mục thành công!"
  })
}