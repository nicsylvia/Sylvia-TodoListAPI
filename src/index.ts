import express, { Application, Response, Request } from "express";

const PORT: number | string = process.env.PORT || 4000;

import cors from "cors"

require("../Config/db");

import router from "../Routes/todoRoutes";

const myServer: Application = express();

myServer.use(cors());

myServer.use(express.json())


myServer.get("/", (req: Request, res: Response) =>{
    return res.status(200).json({
        message: "Our server has been created. It's up and running",
    })
});

myServer.use("/api", router)

myServer.listen(PORT, () =>{
    console.log("Listening to my port on PORT: ", PORT);
})