class NotFoundError extends Error {
  private _code: number;
  constructor(message: string) {
    super(message);
    this._code = 404;
  }

  public get code() {
    return this._code;
  }
}

export default NotFoundError;