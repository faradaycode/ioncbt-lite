import { Dialogs } from "@ionic-native/dialogs/ngx";
import { Component, OnInit } from "@angular/core";
import {
  trigger,
  keyframes,
  style,
  animate,
  transition
} from "@angular/animations";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-quiz",
  templateUrl: "./quiz.page.html",
  styleUrls: ["./quiz.page.scss"],
  animations: [
    trigger("EnterLeave", [
      transition("default => enter", [
        animate(
          "1000ms ease-in",
          keyframes([
            style({
              transform: "translate3d(0,-100%,0)",
              opacity: 0,
              offset: 0
            }),
            style({
              transform: "translate3d(0,100%,0)",
              opacity: 1,
              offset: 0.5
            }),
            style({ transform: "translate3d(0,0,0)", offset: 1 })
          ])
        )
      ])
    ])
  ]
})
export class QuizPage implements OnInit {
  flyIn: string;

  constructor(private dialog: Dialogs, private http: HttpClient) {}

  ngOnInit() {
    this.flyIn = "default";
    this.getData();
  }

  // onPressedChoices(choice: number) {
  //   switch (choice) {
  //     case 1:
  //       this.pressA = true;
  //       this.pressB = false;
  //       this.pressC = false;
  //       this.pressD = false;
  //       this.sJawaban = "A";
  //       break;
  //     case 2:
  //       this.pressB = true;
  //       this.pressA = false;
  //       this.pressC = false;
  //       this.pressD = false;
  //       this.sJawaban = "B";
  //       break;
  //     case 3:
  //       this.pressC = true;
  //       this.pressA = false;
  //       this.pressB = false;
  //       this.pressD = false;
  //       this.sJawaban = "C";
  //       break;
  //     case 4:
  //       this.pressD = true;
  //       this.pressA = false;
  //       this.pressB = false;
  //       this.pressC = false;
  //       this.sJawaban = "D";
  //       break;
  //     default:
  //       this.pressA = false;
  //       this.pressB = false;
  //       this.pressC = false;
  //       this.pressD = false;
  //       this.sJawaban = "";
  //   }
  // }

  onAnswer(value: string) {
    this.dialog
      .confirm("Yakin dengan jawabanmu?", "Peringatan", ["Ya", "Tidak"])
      .then(_ => {
        this.onConfirm(_.toString());
      });
  }

  onConfirm(buttonIndex) {
    alert("You selected button " + buttonIndex);
  }

  getData() {
    let url = "./assets/data.json";
    this.http.get(url).subscribe((res) => {
      let datas = res["data"];
      let mtk: any[] = datas["matematika"];
      
      for (let i = 0; i < mtk.length; i++) {
        console.log(mtk[i]);
      }
    });
  }
}
