import { Model } from 'mongoose';
import { IGenericCrud } from 'src/core';


export class MongoServiceGeneric<T> implements IGenericCrud<T> {
  private _genericCrud: Model<T>;
  private _populateOnFind: string[];

  constructor(genericCrud: Model<T>, populateOnFind: string[] = []) {
    this._genericCrud = genericCrud;
    this._populateOnFind = populateOnFind;
  }

  getAll(): Promise<T[]> {
    return this._genericCrud.find().populate(this._populateOnFind).exec();
  }

  get(id: any): Promise<any> {
    return this._genericCrud.findById(id).populate(this._populateOnFind).exec();
  }

  create(item: T): Promise<T> {
    return this._genericCrud.create(item);
  }

  update(id: string, update: T): Promise<T> {
    return this._genericCrud.findByIdAndUpdate(id, update).exec();
  }
}
