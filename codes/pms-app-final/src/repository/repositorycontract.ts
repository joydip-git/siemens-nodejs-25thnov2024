export interface RepositoryContract<T, TKey> {
    getAll(): Promise<T[]>;
    get(id: TKey): Promise<T>;
    add(entity: T): Promise<boolean>;
    update(id: TKey, entity: T): Promise<boolean>;
    remove(id: TKey): Promise<T>;
}