import { Router } from "express";

// controllers
import * as CtrlUser from "./user_controller";


const router = Router();
router.post("/create", CtrlUser.createOneUser);


export default router;
