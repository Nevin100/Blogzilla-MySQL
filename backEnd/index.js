import express from "express";
import cors from "cors";
//importing routes from post :
import postRoutes from "./routes/posts.js";

//importing routes from auth :
import authRoutes from "./routes/auth.js";

//importing routes from user :
import userRoutes from "./routes/users.js";

const app = express();
app.use(cors());
app.use(express.json());

//using routes :
app.use("/api/posts", postRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(8800, () => {
  console.log("Connected!");
});
