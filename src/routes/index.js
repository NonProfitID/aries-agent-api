import dotenv from "dotenv";
import express from "express";

dotenv.config();
const { APP_NAME } = process.env;

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ msg: `API de ${APP_NAME} inicializada` });
  });

  app.use(express.json());
};

export default routes;
