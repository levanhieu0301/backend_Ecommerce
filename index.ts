import express, {Request, Response} from "express";
import path from "path";
const app = express()
const port = 5000

// Tích hợp pug cho dự án
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
// Tích hợp file tĩnh 
app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req:Request, res:Response) => {
  res.render('client/pages/home', {
    pageTitle: "Trang chủ"
  })
})
app.get('/admin/dashboard', (req:Request, res:Response) => {
  res.render('admin/pages/dashboard', {
    pageTitle: "Tổng quan"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
