export interface ApiResponse<T> {
    message: string;
    statusCode: number;
    value: T | null;
}