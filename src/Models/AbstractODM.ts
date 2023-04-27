import {
  isValidObjectId,
  model,
  Model,
  models, Schema,
  UpdateQuery,
} from 'mongoose';
import InvalidMongoIdError from '../Errors/InvalidMongoIdError';

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
    console.log(created);
    return created;
  }

  public async findAll(): Promise<T[]> {
    return this.model.find({});
  }

  public async findById(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new InvalidMongoIdError(errorMessage);
    return this.model.findById(id);
  }

  public async updateObj(id: string, obj: T): Promise<T | null> {
    if (!isValidObjectId(id)) throw new InvalidMongoIdError(errorMessage);
    return this.model.findOneAndUpdate({ _id: id }, { ...obj } as UpdateQuery<T>, { new: true });
  }
   
  public async deleteById(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) throw new InvalidMongoIdError(errorMessage);
    return this.model.findByIdAndDelete({ _id: id });
  }
}

export default AbstractODM;