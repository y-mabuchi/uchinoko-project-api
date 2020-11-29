/* package */
import { Request, Response } from "express";
import { Connection } from "typeorm";
/* entiry */
import { User } from "../../entity/User";
/* response */
import { sendError, sendOK } from "../../response";

export const userEmailChange = (db: Connection) => {
    return async (req: Request, res: Response) => {
        try {
            const userRepository = db.getRepository(User);
            const user = await userRepository.findOne({
                where: {
                    id: req.params.id,
                },
            });
            if (user) {
                user.email = req.body.email;
                user.password = req.body.password;
                await userRepository.save(user);
                return sendOK(res, user);
                1;
            }
        } catch (e) {
            console.error(e);
            return sendError(res, 500, "error");
        }
    };
};

export const userAllChange = (db: Connection) => {
    return async (req: Request, res: Response) => {
        try {
            const userRepository = db.getRepository(User);
            const user = await userRepository.findOne({
                where: {
                    id: req.params.id,
                },
            });
            if (user) {
                user.name = req.body.name || "";
                user.email = req.body.email || "";
                user.password = req.body.password || "";
                user.age = req.body.age || "";
                user.token = req.body.token || "";
                await userRepository.save(user);
                return sendOK(res, user);
                1;
            }
        } catch (e) {
            console.error(e);
            return sendError(res, 500, "error");
        }
    };
};
