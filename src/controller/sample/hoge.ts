/* package */
import { Request, Response } from "express";
/* response */
import { sendError, sendOK } from "../../response";

export const hogeIndex = () => {
    return async (req: any, res: Response) => {
        try {
            return sendOK(res, "create token");
        } catch (e) {
            return sendError(res, 500, "error");
        }
    };
};
