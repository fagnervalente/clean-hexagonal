import { User as UserModel } from "../models/User";
import { AppDataSource } from "../connection";
import IUserRepository from "@ports/IUserRepository";
import { User } from "@entities/User";

export default class UserDatabaseRepository implements IUserRepository {
    
    userRepository = AppDataSource.getRepository(UserModel);

    save(user: User): Promise<User | null> {
        const newUser = this.userRepository.create(UserDatabaseRepository.mapDataEntityToModel(user));
        return this.userRepository.save(newUser);
    }

    static mapDataModelToEntity(model: UserModel): User {
        return new User(model.id, model.name, model.email);
    }

    static mapDataEntityToModel(entity: User): UserModel {
        return new UserModel(entity.id, entity.name, entity.email);
    }
}