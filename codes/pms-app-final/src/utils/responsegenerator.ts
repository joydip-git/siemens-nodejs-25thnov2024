import { ApiReponse } from "../models/apiresponse";

export const generateReponse = <T>(message: string, data: T | null, statusCode?: number): ApiReponse<T> => {
    return {
        message: message,
        statuscode: statusCode,
        data: data
    }
}