"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTasks = exports.createNewTasks = exports.deleteTasks = exports.searchTasks = exports.getAllTasks = exports.getATasks = void 0;
const todoModels_1 = __importDefault(require("../Models/todoModels"));
// GET ALL TASKS:
const getAllTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getTasks = yield todoModels_1.default.find().sort({ createdAt: -1 });
        return res.status(200).json({
            message: "Successfully got all the tasks",
            data: getTasks
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured in getting daily tasks",
            data: error
        });
    }
});
exports.getAllTasks = getAllTasks;
// GET ONE TASK:
const getATasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAtasks = yield todoModels_1.default.findById(req.params.id);
        return res.status(200).json({
            message: "Successfully got this tasks details",
            data: getAtasks
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured in getting this tasks",
            data: error
        });
    }
});
exports.getATasks = getATasks;
// DELETE A TASK:
const deleteTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasksDeleted = yield todoModels_1.default.findByIdAndRemove(req.params.id);
        return res.status(200).json({
            message: "DELETED TASKS SUCCESSFULLY",
            data: tasksDeleted
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured while trying to delete tasks",
            data: error
        });
    }
});
exports.deleteTasks = deleteTasks;
// UPDATE A TASK:
const updateTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Status } = req.body;
        const tasksUpdates = yield todoModels_1.default.findByIdAndUpdate(req.params.id, { Status }, { new: true });
        return res.status(200).json({
            message: "Successfully updated tasks",
            data: tasksUpdates
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured in updating this tasks",
            data: error
        });
    }
});
exports.updateTasks = updateTasks;
// POST A TASK:
const createNewTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Task, Status, Description } = req.body;
        const newTasks = yield todoModels_1.default.create({
            Task,
            Status,
            Description
        }, { timestamps: true });
        return res.status(201).json({
            message: "SUCCESSFULLY CREATED THIS NEW TASKS",
            data: newTasks
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured in creating new tasks!",
            data: error
        });
    }
});
exports.createNewTasks = createNewTasks;
// SEARCH FOR A TASK:
const searchTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const search = yield todoModels_1.default.find(req.query).sort({ createdAt: -1 });
        return res.status(200).json({
            message: "Successfully got the search key tasks",
            data: search
        });
    }
    catch (error) {
        return res.status(400).json({
            message: "An error occured in getting searched tasks",
            data: error
        });
    }
});
exports.searchTasks = searchTasks;
