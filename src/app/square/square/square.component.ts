import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {

  @Input() color!: string;
  @Input() index!: number;
  isClicked: boolean = false;

  @Output() clickedSquare: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  toggle(): void {
    this.isClicked = !this.isClicked;
    this.clickedSquare.emit(this.index);
  }
}
