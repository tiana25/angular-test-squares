import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {

  @Input() color!: string;
  isClicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.color);
  }

}
