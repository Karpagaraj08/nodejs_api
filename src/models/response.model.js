class Response {
  constructor(status, code, Source, Description, Details, TransID) {
    this._status = status,
      this._code = code,
      this._Source = Source,
      this._Description = Description,
      this._Detail = Details,
      this._TransID = TransID
  }
}


export { Response }