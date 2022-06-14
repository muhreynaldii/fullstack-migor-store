import express from "express";

import {
  getRt,
  getRtById,
  createRt,
  updateRt,
  deleteRt,
} from "../controller/RtController.js";

const router = express.Router();

router.get("/rt", getRt);
router.get("/rt/:id", getRtById);
router.post("/rt", createRt);
router.patch("/rt/:id", updateRt);
router.delete("/rt/:id", deleteRt);

export default router;
