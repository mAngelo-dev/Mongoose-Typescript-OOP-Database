import { HydratedDocument, model, Model, models, Schema } from 'mongoose';

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
}

export default AbstractODM;