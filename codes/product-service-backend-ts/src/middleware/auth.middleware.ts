import { verify, sign, JwtPayload } from 'jsonwebtoken'
import { config } from "dotenv";
import { User } from '../models/user';
import { NextFunction, Request as ExpressRequest, Response as ExpressResponse } from 'express';
import createResponse from '../utilities/response-generator';
import { injectable } from 'inversify';
import { AuthMiddlewareContract } from './auth-middleware.contract';

config()
const secretKey = process.env.SECRET_KEY || 'SECRET-KEY'

type PayloadType = {
    subject: string
}

@injectable()
export class AuthMiddleware implements AuthMiddlewareContract {

    createToken = (user: User) => {
        const payload = { subject: user.username }
        const token = sign(payload, secretKey, { expiresIn: 600 })
        return token
    }
    verifyToken = (req: ExpressRequest, res: ExpressResponse, next: NextFunction) => {
        let response = '';
        try {
            if (!req.headers.authorization) {
                response = createResponse<string>('no authorization header', 401)
                return res.send(response)
            } else {
                const token = req.headers.authorization.replace('Bearer ', '');
                if (!token) {
                    response = createResponse<string>('no token found', 401)
                    return res.send(response)
                } else {
                    try {
                        let payload: string | JwtPayload = verify(token, secretKey)
                        if (!payload) {
                            response = createResponse<string>('no payload found:unauthorized request', 401)
                            return res.send(response)
                        } else {
                            console.log(payload);
                            req.params.userId = (<JwtPayload>payload).subject
                        }
                    } catch (err) {
                        console.log(err);
                        response = createResponse<string>('invalid token', 401)
                        return res.send(response)
                    }
                }
            }
            next()
        } catch (error: any) {
            response = createResponse<string>(error.message, 401)
            return res.send(response)
        }
    }
}