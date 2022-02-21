import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
  constructor() {}

  ngOnInit() {}
  public num: number = 0;
  checkOddEven() {
    return this.num % 2 == 0 ? 'Even' : 'Odd';
  }
  public num1: number;
  public sumofdigits: number;
  sumOfDigits() {
    let sumofdigits = 0;
    let n = this.num1;
    while (n) {
      sumofdigits = sumofdigits + (n % 10);
      n = Math.floor(n / 10);
    }
    return sumofdigits;
  }
}
