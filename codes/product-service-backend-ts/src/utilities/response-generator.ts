import { ApiResponse } from "../models/api-response";

export default function createResponse<T>(message: string, status: number, data?: T | null): string {
    const apiResponse: ApiResponse<T> = {
        message: message,
        statusCode: status,
        value: data ? data : null
    }
    return JSON.stringify(apiResponse)
}