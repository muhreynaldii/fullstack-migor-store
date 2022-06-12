import express from "express";
import cors from "cors";
import MinyakRoute from "./routes/MinyakRoute.js";
import UsersRoute from "./routes/UsersRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(MinyakRoute);
app.use(UsersRoute);

app.listen(5000, () => console.log("Server up and running"));
