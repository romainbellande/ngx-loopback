import { RequestOptions } from '@angular/http';


interface IOptions {
  auth?: boolean;
  subUrl?: string;
  callback?: Function;
  request?: RequestOptions;
}

export class QueryOptions {
  auth? = false;
  subUrl?: string;
  callback?: Function;
  request?: RequestOptions;

  constructor(options: IOptions) {
    Object.assign(this, options);
  }
}
