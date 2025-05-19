import { Router } from "express";

const router = Router();

router.get("/status", (req, res) => {
  res.json({
    Uptime: process.uptime(),
  });
});

export default router;
