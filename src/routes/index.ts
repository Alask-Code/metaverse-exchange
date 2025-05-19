import { Router } from "express";
import { arch } from "os";

const router = Router();

router.get("/status", (req, res) => {
  res.json({
    Uptime: process.uptime(),
  });
});

export default router;
