import { Router } from "express";

// controllers
import * as CtrlPais from "./pais_controller";


const router = Router();
router.get("/get-all", CtrlPais.getAllPais);
router.get("/state-true", CtrlPais.getAllStateTrue);
router.put("/put-state/:id", CtrlPais.putStatePais);


export default router;
