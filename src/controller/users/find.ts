/* package */
import { Request, Response } from "express";
import { Connection } from "typeorm";
/* entiry */
import { User } from "../../entity/User";
/* response */
import { sendError, sendOK } from "../../response";

export const userShow = (db: Connection) => {
    return async (req: Request, res: Response) => {
        try {
            const userRepository = db.getRepository(User);
            console.log("idは", req.params);
            const user = await userRepository.findOne({
                where: {
                    id: req.params.id,
                },
            });
            return sendOK(res, user);
        } catch (e) {
            console.error(e);
            return sendError(res, 500, "error");
        }
    };
};
