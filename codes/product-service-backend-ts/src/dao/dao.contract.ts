export interface DaoContract<T> {
    readFromFile(): Promise<T>;
    writeIntoFile(data: T): Promise<void>;
}