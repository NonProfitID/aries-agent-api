import dotenv from "dotenv";
import app from "./src/app.js";
import logger from "./src/logger/index.js";

dotenv.config();
const { APP_PORT, APP_URL } = process.env;

const port = APP_PORT || 8080;

app.listen(port, () => {
  logger.info(`Servidor rodando em ${APP_URL}:${port}`);
});
