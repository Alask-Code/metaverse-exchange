import { Router } from "express";

const router = Router();

router.get("/status", (req, res) => {
  res.json({
    description: "Endpoint destinado a verificar o estado da API.",
    status: {
      code: 200,
      message: "API está funcionando corretamente.",
      load: "10%",
      uptime: "1h 30m",
      endpoints: {
        blockchain: "online",
        users: "online",
        transactions: "online",
        wallets: "online",
        home: "online",
      },
    },
  });
});

export default router;
