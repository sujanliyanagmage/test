import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new-component-2',
  templateUrl: './my-new-component-2.component.html',
  styleUrls: ['./my-new-component-2.component.css']
})
export class MyNewComponent2Component implements OnInit {

  constructor() { }

  ngOnInit() { }
  /*this used to create a userdefined object*/
  myobject = {
    name: 'sujan'
  };
  months = ["January", "Feburary", "March", "April", "May",
    "June", "July", "August", "September",
    "October", "November", "December"];

  isavailable = true;

  myClickFunction(event) {

    alert("button clicked" + event);
    console.log(event);

    if (this.isavailable == true) {
      this.isavailable = false;
    } else {
      this.isavailable = true;
    }

  };

  changemonths(event) {
    console.log(event);
  }
}
