import Service from "../../baseInterfaces/service";
import userRepository from "../repositories/user.repository";

export class UserService extends Service {
    constructor() {
        super(userRepository)
    }

    async me(): Promise<any> {
        return await userRepository.me(false);
    }
}

export default new UserService();