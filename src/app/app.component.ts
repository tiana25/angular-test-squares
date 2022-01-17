import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-squares-app';
  result: string[] = [];
  squaresAmount = 6;
  colors = ['red', 'green', 'purple', 'pink', 'yellow']

  ngOnInit(): void {
    let amountOfBlueSquares = this.getAmountOfBlueSquares();
    for(let i = 0; i < amountOfBlueSquares; i++) {
      this.result.push('blue');
    }
    this.getUniqueRandomNumbers(6-amountOfBlueSquares).forEach((el) => this.result.push(this.colors[el]));
    this.shuffleArray(this.result);
    console.log(this.result);
  }
  
  getAmountOfBlueSquares(): number {
    return Math.floor(Math.random() * 3 + 1); 
  }

  getUniqueRandomNumbers(num: number): number[] {
    let arr = [];
    while(arr.length < num){
        var r = Math.floor(Math.random() * 5);
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    return arr;
  }

  shuffleArray(array: string[]):void {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  }

}
