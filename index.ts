import express from "express";
import path from "path";
import dotenv from "dotenv";
import routesAdmin from "./routes/admin/index.route"
import routesClient from "./routes/client/index.route"
import { pathAdmin } from "./configs/variable.config";
import { connectBD } from "./configs/database.config";

// Load biến môi trường
dotenv.config();
const app = express()
const port = 5000
//Kết nối CSDL
connectBD();
// Tích hợp pug cho dự án
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
// Tích hợp file tĩnh 
app.use(express.static(path.join(__dirname, "public")))
//Tạo biến toàn cục
app.locals.pathAdmin = pathAdmin

app.use(`/${pathAdmin}`, routesAdmin)
app.use("/", routesClient)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
