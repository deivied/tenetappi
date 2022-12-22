
export abstract class IGenericCrud<T> {
  abstract getAll(): Promise<T[]>;

  abstract get(id: string): Promise<any>;

  abstract create(item: T): Promise<any>;

  abstract update(id: string, item: T);
}
