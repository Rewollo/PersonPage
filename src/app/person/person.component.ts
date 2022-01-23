import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  personAge = this.ageValue();

  ageValue() {
    let age = Date.now() - (522482400 * 1000);
    return Math.trunc(age / (31556926 * 1000));
  }
}