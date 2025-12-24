import {Request, Response, NextFunction, RequestHandler} from 'express';
import * as z from "zod";

const zodValidateMiddleware = <T extends z.ZodTypeAny>(schema: T): RequestHandler => (req: Request, res: Response, next: NextFunction) => {

    const response = schema.safeParse(req.body);
    if (!response.success) {
        return res.status(400).json({
            error: z.flattenError(response.error).fieldErrors,
        })
    }
    req.body = response.data;
    next();
}

export default zodValidateMiddleware;