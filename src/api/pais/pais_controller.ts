
// import { Request, Response } from "express";
import { RequestHandler } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//? GET PAISE ALLL
//? ***********************************************************************************************/
export const getAllPais: RequestHandler = async (req, res) => {
    try {
        const paisData = await prisma.paises.findMany({});
        return res.json(paisData);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msn: "Error Server 😕 ❗️❗️" });
    }
};

//? GET PAISE EN TRUE 
//? ***********************************************************************************************/
export const getAllStateTrue: RequestHandler = async (req, res) => {
    try {
        const paisData = await prisma.paises.findMany({
            where: {
                estado_b: true,
            }

        });
        return res.json(paisData);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msn: "Error Server 😕 ❗️❗️" });
    }
};



//? GET PAISE EN TRUE 
//? ***********************************************************************************************/
export const putStatePais: RequestHandler = async (req, res) => {


    const idx = req.params.id
    const estadox = req.body.estado

    try {
        const putPais = await prisma.paises.update({
            where: {
                id_pais_i: Number(idx)
            },
            data: {
                estado_b: estadox
            }

        });
        return res.json(putPais);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msn: "Error Server 😕 ❗️❗️" });
    }
};





// //? CREATE ONE USER
// //? ***********************************************************************************************/
// export const createOneUser: RequestHandler = async (req, res) => {
//     try {
//         const { EMAIL_V, PASSWORD_V, SISTEMA_OP_V, IP_V, PAIS_V, FECHA_V, CITY_V } = req.body;

//         const userData = await prisma.usuarios.create({
//             data: {
//                 EMAIL_V,
//                 PASSWORD_V,
//                 SISTEMA_OP_V,
//                 IP_V,
//                 PAIS_V,
//                 FECHA_V,
//                 CITY_V,
//             }

//         });
//         return res.json({ msj: "success Data 😃 ✔️", userData });
//     } catch (err) {
//         console.log(err);
//         return res.status(500).json({ msn: "Error Server 😕 ❗️❗️" });
//     }
// };



