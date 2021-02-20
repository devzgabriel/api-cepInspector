import express from "express";
import { InspectCepController } from "./controllers/InspectCepController";

const routes = express.Router();
const inspectCepController = new InspectCepController();

routes.get("/inspect/:cepNumber", inspectCepController.index);

export default routes;
