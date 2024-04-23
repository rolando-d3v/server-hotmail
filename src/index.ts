import express from "express";
import cors from "cors";

import morgan from "morgan";
import { env_entorno } from "./env/var_env";

// Import Routes 
import userRoutes from "./api/user/user.routes";


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



