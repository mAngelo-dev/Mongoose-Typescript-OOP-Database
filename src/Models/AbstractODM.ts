import {
  HydratedDocument,
  isValidObjectId,
  model,
  Model,
  models,
  Schema,
  UpdateQuery,
} from 'mongoose';
import InvalidMongoIdError from '../Errors/InvalidMongoIdError';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  private schema: Schema;
  private modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(modelName, this.schema);
  }

  public create(obj: T): Promise<HydratedDocument<T>> {
    return this.model.create({ ...obj });
  }
  // ! Tipar depois
  public findAll() {
    return this.model.find();
  }
  // ! Tipar depois
  public findById(id: string) {
    if (!isValidObjectId(id)) throw new InvalidMongoIdError('Invalid mongo id');
    return this.model.findById(id);
  }

  // ! Pedir ajuda para realizar update e tipagem

  public async update(id: string, obj: T) {
    if (!isValidObjectId(id)) throw new InvalidMongoIdError('Invalid mongo id');
    return this.model.findOneAndUpdate({ _id: id }, { ...obj } as UpdateQuery<T>, { new: true });
  }
}

export default AbstractODM;