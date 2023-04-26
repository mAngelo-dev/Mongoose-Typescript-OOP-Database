import { HydratedDocument, isValidObjectId, model, Model, models, Schema } from 'mongoose';
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

  public findAll() {
    return this.model.find();
  }

  public findById(id: string) {
    if (!isValidObjectId(id)) throw new InvalidMongoIdError('Invalid mongo id');
    return this.model.findById(id);
  }

  // public async update(id: string, obj: T): Promise<> {
  //   if (!isValidObjectId(id)) throw new InvalidMongoIdError('Invalid mongo id');
  //   return this.model.updateOne({ _id: id }, { ...obj }, { new: true });
  // }
}

export default AbstractODM;