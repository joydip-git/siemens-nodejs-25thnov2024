import { User } from "../models/user";

export interface UserBoContract {
    saveUser(user: User): Promise<User>;
    validateUser(user: User): Promise<User>;
}