import {
  isValidObjectId,
  model,
  Model,
  models, Schema,
  UpdateQuery,
} from 'mongoose';
import InvalidMongoIdError from '../Errors/InvalidMongoIdError';
import NotFoundError from '../Errors/NotFoundError';

const errorMessage = 'Invalid mongo id';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  private schema: Schema;
  private modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(modelName, this.schema);
  }

  public async createObj(obj: T): Promise<T> {
    const created = await this.model.create({ ...obj });
    return created;
  }

  public async findAll(): Promise<T[]> {
    return this.model.find({});
  }

  public async findById(id: string): Promise<T> {
    if (!isValidObjectId(id)) throw new InvalidMongoIdError(errorMessage);
    const query = await this.model.findById(id);
    if (!query) throw new NotFoundError(`${this.modelName} not found`);
    return query;
  }

  public async updateObj(id: string, obj: T): Promise<T> {
    if (!isValidObjectId(id)) throw new InvalidMongoIdError(errorMessage);
    const query = await this.model.findOneAndUpdate(
      { _id: id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
    if (!query) throw new NotFoundError(`${this.modelName} not found`);
    return query;
  }
   
  public async deleteById(id: string): Promise<T> {
    if (!isValidObjectId(id)) throw new InvalidMongoIdError(errorMessage);
    const query = await this.model.findByIdAndDelete({ _id: id });
    if (!query) throw new NotFoundError(`${this.modelName} not found`);
    return query;
  }
}

export default AbstractODM;