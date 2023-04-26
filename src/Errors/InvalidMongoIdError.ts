class InvalidMongoIdError extends Error {
  private _code: number;
  constructor(message: string) {
    super(message);
    this._code = 422;
  }

  public get code() {
    return this._code;
  }
}

export default InvalidMongoIdError;