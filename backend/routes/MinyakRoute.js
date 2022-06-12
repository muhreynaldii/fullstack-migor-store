import express from "express";

import {
  getMinyak,
  getMinyakById,
  createMinyak,
  updateMinyak,
  deleteMinyak,
} from "../controller/MinyakController.js";

const router = express.Router();

router.get("/admin", getMinyak);
router.get("/admin/:id", getMinyakById);
router.post("/admin", createMinyak);
router.patch("/admin/:id", updateMinyak);
router.delete("/admin/:id", deleteMinyak);

export default router;
