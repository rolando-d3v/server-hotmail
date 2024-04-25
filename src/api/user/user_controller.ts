
// import { Request, Response } from "express";
import { RequestHandler } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//? CREATE ONE USER 
//? ***********************************************************************************************/
export const createOneUser: RequestHandler = async (req, res) => {
    try {
        const { EMAIL_V, PASSWORD_V, SISTEMA_OP_V, IP_V, PAIS_V, FECHA_V, CITY_V } = req.body;

        const userData = await prisma.usuarios.create({
            data: {
                EMAIL_V,
                PASSWORD_V,
                SISTEMA_OP_V,
                IP_V,
                PAIS_V,
                FECHA_V,
                CITY_V,
            }

        });
        return res.json({ msj: "success Data 😃 ✔️", userData });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msn: "Error Server 😕 ❗️❗️" });
    }
};



