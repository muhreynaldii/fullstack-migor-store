import express from "express";
import cors from "cors";
import MinyakRoute from "./routes/MinyakRoute.js";
import UsersRoute from "./routes/UsersRoute.js";
import DomisiliRoute from "./routes/DomisiliRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(MinyakRoute);
app.use(UsersRoute);
app.use(DomisiliRoute);

app.listen(5000, () => console.log("Server up and running"));
