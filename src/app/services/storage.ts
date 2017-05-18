import { Injectable } from '@angular/core';

export interface IStorageService {

  setOrUpdateAsync(key: string, update: (content: any) => any): Promise<void>;
  getAsync(key: string): Promise<any>;
}

@Injectable()
export class StorageService implements IStorageService {

  constructor() {
  }
  
  getAsync(key: string): Promise<any> {
    var content = window.localStorage.getItem(key);
    return Promise.resolve(content);
  }

  setOrUpdateAsync(key: string, update: any): Promise<void> {

    //var content = window.localStorage.getItem(key);
    //content = update(content);
    var content = update;

    window.localStorage.setItem(key, content);

    return Promise.resolve();
  }
}