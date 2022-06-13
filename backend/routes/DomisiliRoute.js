import express from "express";

import {
  getDomisili,
  getDomisiliById,
  createDomisili,
  updateDomisili,
  deleteDomisili,
} from "../controller/DomisiliController.js";

const router = express.Router();

router.get("/domisili", getDomisili);
router.get("/domisili/:id", getDomisiliById);
router.post("/domisili", createDomisili);
router.patch("/domisili/:id", updateDomisili);
router.delete("/domisili/:id", deleteDomisili);

export default router;
