// validated.ts - CHECKS that :id IN THE URL IS A VALID MONGODB ID

import { NextFunction, Request, Response } from "express";
import { isValidObjectId } from "mongoose";

// runs BEFORE the controller on routes
// - valid id -> the controller will run
// - invalid id -> stiop here and send a 400 (bad request)

export const validateId = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  if (!isValidObjectId(id)) {
    res.status(400).json({ message: `Invalid task ID: ${id}` });
  }

  next();
};
