import express from "express";
import { env } from "./config/env";
import { errorMiddleware } from "./middleware/error.middleware";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.use(errorMiddleware);

app.listen(env.PORT, () => {
  console.log(`Server running on port ${env.PORT} [${env.NODE_ENV}]`);
});

export default app;
