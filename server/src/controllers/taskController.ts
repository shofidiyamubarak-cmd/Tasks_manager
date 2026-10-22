// // taskController.ts - THE LOGIC FOR EACH TASK ENDPOINT
// // Each function follows the same simple flow:
// // 1.read what we need from the request(req.boddy/ req.params)
// // 2.Ask the database (Through the Task model)
// // 3.Send back a response with a status code + JSON

// taskController.ts - THE LOGIC FOR EACH TASK ENDPOINT
// Each function follows the same simple flow:
// 1.read what we need from the request(req.boddy/ req.params)
// 2.Ask the database (Through the Task model)
// 3.Send back a response with a status code + JSON

import { Request, Response } from "express";
import Task from "../models/tasks";

//
// Status code that might be used

// POST - Create a new task
export const createTask = async (req: Request, res: Response) => {
  // 1.put in the fields/keys in to the req body
  const { title, description, tag } = req.body;

  //   2. Save it if a field is missing
  if (!title || !description || !tag) {
    res.status(406).json({ message: "All fields must be filled" });
  }

  //    3. Save all information of title description and tag in the database
  const task = await Task.create({ title, description, tag });

  //   4 201 = Created
  res.status(201).json({ message: "Task created sucessfully", task });
};

// GET -> Get every task
export const getAllTasks = async (req: Request, res: Response) => {
  const tasks = await Task.find();
  res.status(200).json({ tasks });
};

// PATCH -> update a task
export const updateTask = async (req: Request, res: Response) => {
  const { title, description, tag } = req.body;

  const task = await Task.findByIdAndUpdate(
    req.params.id,
    {
      title,
      description,
      tag,
    },
    {
      returnDocument: "after", // send back the task AFTER the update
      runValidators: true, // apply the schema rules on updates too
    },
  );

  if (!task) {
    res.status(404).json({ message: "Task not found" });
    return;
  }

  res.status(200).json({ message: "Task updated successfully", task });
};

// DELETE -> delete a task
export const deleteTask = async (req: Request, res: Response) => {
  const task = await Task.findByIdAndDelete(req.params.id);

  if (!task) {
    res.status(404).json({ message: "Task not found" });
    return;
  }

  res.status(200).json({ message: "Task deleted successfully" });
};

// GET -> get one task
export const getTaskById = async (req: Request, res: Response) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    res.status(404).json({ message: "Task not found" });
    return;
  }

  res.status(200).json({ task });
};
