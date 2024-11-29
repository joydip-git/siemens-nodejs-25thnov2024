export interface ApiReponse<T> {
    statuscode?: number;
    message: string;
    data: T | null;
}