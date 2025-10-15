import { Request, Response } from "express"

export const dashboardController = (req:Request, res:Response) => {
  res.render('admin/pages/dashboard', {
    pageTitle: "Tổng quan"
  })
}