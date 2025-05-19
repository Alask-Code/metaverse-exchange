import express from "express";
import cors from "cors";
import routes from "./routes";
import dotenv from "dotenv";
import cli from "./ core/cli";

const port = process.env.PORT || 3000;

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

cli();
// app.listen(port, () => {
//   console.log(`🚀 Server running on http://localhost:${port}`);
// });
