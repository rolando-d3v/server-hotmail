import express from "express";
import cors from "cors";

import morgan from "morgan";
import { env_entorno } from "./var_env/var";

// Import Routes 
import userRoutes from "./api/user/user.routes";
import paisRoutes from "./api/pais/pais.routes";


//server app
const app = express();

const port = env_entorno.PORT;
app.listen(port, () => {
  console.log(`🔥  🚀  server run port ➡️ ... ${port} 😃  ✔️`);
});

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// static files
app.use(express.static("Data"));
// app.use(express.static(path.join(__dirname, "Data")));

//routes
app.use("/user", userRoutes);
app.use("/pais", paisRoutes);



