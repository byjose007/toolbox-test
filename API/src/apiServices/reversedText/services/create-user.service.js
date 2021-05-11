import User from "../models/user.model";
export default class CreateUserService {

    constructor() {}
    async createUser(user) {
        try {
            const savedUser = new User(user);
            await savedUser.save();
            return savedUser
        } catch (error) {
            throw error;
        }
    }
}