import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isVisible: boolean = false;

  images = [
    {'id': 1, 'url': '../../assets/images/photo2.jpg'},
    {'id': 2, 'url': '../../assets/images/photo3.jpg'},
  ]

}
