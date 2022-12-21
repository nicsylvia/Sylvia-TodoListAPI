"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoControls_1 = require("../Controller/todoControls");
const router = express_1.default.Router();
router.route("/getalltasks").get(todoControls_1.getAllTasks);
router.route("/getatask/:id").get(todoControls_1.getATasks);
router.route("/searchtasks").get(todoControls_1.searchTasks);
router.route("/deletetasks/:id").delete(todoControls_1.deleteTasks);
router.route("/addnewtasks").post(todoControls_1.createNewTasks);
router.route("/updatetasks/:id").patch(todoControls_1.updateTasks);
exports.default = router;
