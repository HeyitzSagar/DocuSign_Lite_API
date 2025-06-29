import { IUserInput, IUserResponse } from "../../../../@types/user";
import { AppDataSource } from "../../../../data-source";
import { User } from "../entities/user";

const userRepo = AppDataSource.getRepository(User)

export class UserService {
    private userRepo = AppDataSource.getRepository(User);

    async createUser(data: IUserInput): Promise<IUserResponse> {
        const user = this.userRepo.create(data);
        const userResponse = await this.userRepo.save(user);
        const { password, ...safeUser } = userResponse;
        return safeUser;
    }

}