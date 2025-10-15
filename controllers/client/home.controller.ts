import { Request, Response } from "express"
export const  homeController = (req:Request, res:Response) => {
  res.render('client/pages/home', {
    pageTitle: "Trang chủ"
  })
}