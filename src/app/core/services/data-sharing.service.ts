import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  public itemPage: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  constructor() {}
}
