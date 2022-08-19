import { ErrorRequestHandler, Response } from "express";

const ERROR_HANDLERS = {
  CastError: (res: Response) =>
    res.status(400).json({ error: "id is malformed" }),

  TokenExpirerError: (res: Response) =>
    res.status(401).json({ error: "token expired" }),

  JsonWebTokenError: (res: Response) => res.status(401).end(),

  defaultError: (res: Response) => res.status(500).end(),
};

const handleError: ErrorRequestHandler = (error, _req, res, _next) => {
  console.error(error.name);

  const handler =
    ERROR_HANDLERS[error.name as keyof typeof ERROR_HANDLERS] ||
    ERROR_HANDLERS.defaultError;

  handler(res);
};

export default handleError;
