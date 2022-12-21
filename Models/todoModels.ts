import mongoose from "mongoose";

interface todoList {
    Task: string;
    Status: string;
    Description: string;
};

interface iTodoList extends todoList, mongoose.Document{};

const todoSchemas = new mongoose.Schema({
    Task: String,
    Status: String,
    Description: String,
}, {timestamps: true});

export default mongoose.model<iTodoList>("TodoCollections", todoSchemas)