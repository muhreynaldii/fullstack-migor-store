import express from "express";
import cors from "cors";
import MinyakRoute from "./routes/MinyakRoute.js";
import UsersRoute from "./routes/UsersRoute.js";
import DomisiliRoute from "./routes/DomisiliRoute.js";
import WargaRoute from "./routes/WargaRoute.js";
import RtRoute from "./routes/RtRoute.js";
import RoleRoute from "./routes/RoleRoute.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use(MinyakRoute);
app.use(UsersRoute);
app.use(DomisiliRoute);
app.use(WargaRoute);
app.use(RtRoute);
app.use(RoleRoute);

app.listen(5000, () => console.log("Server up and running"));
