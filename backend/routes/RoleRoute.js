import express from "express";

import {
  getRole,
  Register,
  Login,
  Logout,
} from "../controller/RoleController.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controller/RefreshToken.js";

const router = express.Router();

router.get("/role", verifyToken, getRole);
router.post("/role", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

export default router;
