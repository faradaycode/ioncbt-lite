import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.page.html",
  styleUrls: ["./quiz.page.scss"]
})
export class QuizPage implements OnInit {
  pressA: boolean = false;
  pressB: boolean = false;
  pressC: boolean = false;
  pressD: boolean = false;
  sJawaban: string = "";
  nSoal: number = 10;
  currentCard: number = 0;

  constructor() {}

  ngOnInit() {}

  onPressedChoices(choice: number) {
    switch (choice) {
      case 1:
        this.pressA = true;
        this.pressB = false;
        this.pressC = false;
        this.pressD = false;
        this.sJawaban = "A";
        break;
      case 2:
        this.pressB = true;
        this.pressA = false;
        this.pressC = false;
        this.pressD = false;
        this.sJawaban = "B";
        break;
      case 3:
        this.pressC = true;
        this.pressA = false;
        this.pressB = false;
        this.pressD = false;
        this.sJawaban = "C";
        break;
      case 4:
        this.pressD = true;
        this.pressA = false;
        this.pressB = false;
        this.pressC = false;
        this.sJawaban = "D";
        break;
      default:
        this.pressA = false;
        this.pressB = false;
        this.pressC = false;
        this.pressD = false;
        this.sJawaban = "";
    }
  }

  onNextClicked(index: number, MAX: number) {
    this.currentCard = index + 1;
    //this.snumb = num;
    if (this.currentCard < MAX) {
        var divShow = document.getElementById('s' + this.currentCard);
        var divHide = document.getElementById('s' + index);
        divShow.style.display = 'block';
        divHide.style.display = 'none';
      }
  }

  onPrevClicked(MIN: number) {
    if (this.currentCard != MIN) {
      this.currentCard -= 1;
    }
  }
}
