import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LeakService {
  bin = new BehaviorSubject(null);
  constructor() {}
}
