
// import { Request, Response } from "express";
import { RequestHandler } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//? CREATE ONE USER 
//? ***********************************************************************************************/
export const createOneUser: RequestHandler = async (req, res) => {
    try {
        const { DESC_CORTA_V, DESC_LARGA_V, NIVEL1_ID_I } = req.body;

        const userData = await prisma.usuarios.create({
            data: {
                EMAIL_V: DESC_CORTA_V.toUpperCase(),
                PASSWORD_V: DESC_LARGA_V.toUpperCase(),
                SISTEMA_OP_V: DESC_LARGA_V.toUpperCase(),
                IP_V: "sdd",
                PAIS_V: "sdd",
                FECHA_V: "sdd",
            }

        });
        return res.json({ msj: "success Data 😃 ✔️", userData });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msn: "Error Server 😕 ❗️❗️" });
    }
};



