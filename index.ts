import express from "express";
import path from "path";
import routesAdmin from "./routes/admin/index.route"
import routesClient from "./routes/client/index.route"
const app = express()
const port = 5000

// Tích hợp pug cho dự án
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
// Tích hợp file tĩnh 
app.use(express.static(path.join(__dirname, "public")))

app.use("/admin", routesAdmin)
app.use("/", routesClient)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
