import { UserBoContract } from "./user-bo.contract";
import { User } from "../models/user";
import { inject, injectable } from "inversify";
import diTokens from "../utilities/app-constants";
import { DaoContract } from "../dao/dao.contract";

@injectable()
export class UserBo implements UserBoContract {
    constructor(@inject(diTokens.USER_DAO_TOKEN) private userDao: DaoContract<User[]>) { }
    async saveUser(user: User): Promise<User> {
        try {
            const users = <User[]>(await this.userDao.readFromFile())
            if (users) {
                if (users.length > 0) {
                    const found = users.find(u => u.username === user.username)
                    if (found) {
                        throw new Error("user already exists")
                    } else {
                        users.push(user)
                        const res = await this.userDao.writeIntoFile(users)
                        return user
                    }
                } else {
                    users.push(user)
                    const res = await this.userDao.writeIntoFile(users)
                    return user
                }
            } else
                throw new Error("something went wrong..data could not be saved")
        } catch (error) {
            throw error
        }
    }

    async validateUser(user: User): Promise<User> {
        try {
            const users = <User[]>(await this.userDao.readFromFile());
            const found = users.find(u => u.username === user.username && u.password === user.password)
            if (!found) {
                throw new Error('not a valid user')
            } else {
                return user
            }
        }
        catch (e) {
            throw e
        }
    }
}