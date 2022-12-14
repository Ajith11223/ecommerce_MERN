const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv =require("dotenv")
const userRoute =require("./routes/user")
const authRoute =require("./routes/auth")
const productRoute =require("./routes/product")
const cartRoute =require("./routes/cart")
const orderRoute =require("./routes/order")
const cors = require('cors')
dotenv.config()
mongoose.connect(process.env.MONGO_URL).then(()=> console.log("Db connected")).catch((err)=>{
    console.log(err);
})

app.use(
    cors({
      origin: ["http://localhost:3000"],
      credentials: true,
    })
  );
app.use(express.json())
app.use("/api/auth",authRoute)

app.use("/api/user",userRoute)
app.use("/api/product",productRoute)
app.use("/api/cart",cartRoute)
app.use("/api/product",orderRoute)

app.listen(process.env.PORT || 5000,()=>{ 
    console.log("backend server runnig successfully")
})