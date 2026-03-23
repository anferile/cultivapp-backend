import { Request, Response, NextFunction } from "express";
import { AppError } from "../shared/errors/AppError";
import { ZodError } from "zod";

export function errorMiddleware(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({ message: err.message });
    return;
  }

  if (err instanceof ZodError) {
    res.status(400).json({
      message: "Validation error",
      errors: err.flatten().fieldErrors,
    });
    return;
  }

  console.error(err);
  res.status(500).json({ message: "Internal server error" });
}
