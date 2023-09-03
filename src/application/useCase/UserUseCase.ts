import IUserRepository from "@ports/IUserRepository";
import { User } from "@entities/User";


export class UserUseCase {

    constructor(readonly userRepository: IUserRepository) {}

    async create(user: User) {
        return await this.userRepository.save(user);
    }
}