import express from "express";

import {getATasks, getAllTasks, searchTasks, deleteTasks, createNewTasks, updateTasks} from "../Controller/todoControls";

const router = express.Router();

router.route("/getalltasks").get(getAllTasks);
router.route("/getatask/:id").get(getATasks);
router.route("/searchtasks").get(searchTasks);
router.route("/deletetasks/:id").delete(deleteTasks);
router.route("/addnewtasks").post(createNewTasks);
router.route("/updatetasks/:id").patch(updateTasks);

export default router;