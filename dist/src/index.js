"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = process.env.PORT || 4000;
const cors_1 = __importDefault(require("cors"));
require("../Config/db");
const todoRoutes_1 = __importDefault(require("../Routes/todoRoutes"));
const myServer = (0, express_1.default)();
myServer.use((0, cors_1.default)());
myServer.use(express_1.default.json());
myServer.get("/", (req, res) => {
    return res.status(200).json({
        message: "Our server has been created. It's up and running",
    });
});
myServer.use("/api", todoRoutes_1.default);
myServer.listen(PORT, () => {
    console.log("Listening to my port on PORT: ", PORT);
});
