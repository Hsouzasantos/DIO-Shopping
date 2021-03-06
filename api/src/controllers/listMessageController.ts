import { Request, Response } from "express";
import { listMessageService } from "../services/ListMessageService";

class ListMessageController {
    async handle(req: Request, res: Response) {
        const listMessageService = new ListMessageService();

        const allMessages = await listMessageService.execute();

        return res.json(allMessages);
    }
}

export { ListMessageController }