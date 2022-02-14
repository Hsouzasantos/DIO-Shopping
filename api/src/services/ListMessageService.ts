import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../repository/MessagedRepository";

class ListMessageService {
    async execute() {
        const messageRepository = getCustomRepository(MessagesRepository);

        const allMessagens = await messageRepository.find();

        return allMessagens
    }
}

export { ListMessageService }