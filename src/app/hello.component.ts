import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LeakService } from './leak.service';

@Component({
  selector: 'hello',
  template: `
    <div [formGroup]="leak">
      <input type="text" formControlName="form1" />
    </div>
    <h1>Hello {{ name }}!</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent implements OnInit {
  @Input() name: string;
  mock: any;

  leak = new FormGroup({
    form1: new FormControl()
  });
  constructor(private leakService: LeakService) {}
  ngOnInit() {
    const tmp = [];
    for (let i = 1; i < 50000000; i++) {
      tmp.push(i);
    }

    this.mock = tmp;

    this.leakService.bin.next(this.leak);
  }
}
