
import express from "express";
import dotenv from "dotenv";
import connectDb from "./dataBase/db.js";
import userRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import courseRoute from "./routes/course.route.js"
import mediaRoute from "./routes/media.route.js";
import purchaseRoute from "./routes/PurchaseCourse.route.js"
import coursePrpgressRoute from "./routes/courseProgress.route.js"
import path from "path"

dotenv.config();

// Call database connection
connectDb();

const app = express();
const PORT = process.env.PORT || 8080;
const _dirname = path.resolve();

// Default middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://rainofprogramming.onrender.com", // Frontend URL
    credentials: true,
  })
);

// APIs
app.use("/api/v1/media", mediaRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/course", courseRoute);
app.use("/api/v1/purchase",purchaseRoute)
app.use("/api/v1/progress",coursePrpgressRoute)


app.use(express.static(path.join(_dirname,"/client/dist")));
app.get('*',(_,res) =>{
  res.sendFile(path.resolve(_dirname, "client", "dist", "index.html"))
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
