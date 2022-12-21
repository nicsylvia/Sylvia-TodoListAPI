import todoModels from "../Models/todoModels";

import { Request, Response} from "express";
import { truncate } from "fs/promises";

// GET ALL TASKS:
const getAllTasks = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const getTasks = await todoModels.find().sort({createdAt: -1});
        return res.status(200).json({
            message: "Successfully got all the tasks",
            data: getTasks
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured in getting daily tasks",
            data: error
        })
    }
};

// GET ONE TASK:
const getATasks = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const getAtasks = await todoModels.findById(req.params.id);
        return res.status(200).json({
            message: "Successfully got this tasks details",
            data: getAtasks
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured in getting this tasks",
            data: error
        })
    }
};

// DELETE A TASK:
const deleteTasks = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const tasksDeleted = await todoModels.findByIdAndRemove(req.params.id);
        return res.status(200).json({
            message: "DELETED TASKS SUCCESSFULLY",
            data: tasksDeleted
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured while trying to delete tasks",
            data: error
        })
    }
}

// UPDATE A TASK:
const updateTasks = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const {Status} = req.body;
        const tasksUpdates = await todoModels.findByIdAndUpdate(
            req.params.id,
            { Status},
            {new: true}
        )
        return res.status(200).json({
            message: "Successfully updated tasks",
            data: tasksUpdates
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured in updating this tasks",
            data: error
        })
    }
}

// POST A TASK:
const createNewTasks = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const { Task, Status, Description} = req.body;
        const newTasks = await todoModels.create({
            Task,
            Status,
            Description
        }, {timestamps : true})
        return res.status(201).json({
            message: "SUCCESSFULLY CREATED THIS NEW TASKS",
            data: newTasks
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured in creating new tasks!",
            data: error
        })
    }
}

// SEARCH FOR A TASK:
const searchTasks = async(req: Request, res: Response): Promise<Response> =>{
    try {
        const search = await todoModels.find(req.query).sort({createdAt: -1});
        return res.status(200).json({
            message: "Successfully got the search key tasks",
            data: search
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error occured in getting searched tasks",
            data: error
        })
    }
}

export {getATasks, getAllTasks, searchTasks, deleteTasks, createNewTasks, updateTasks};