import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sw-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  stringInterpolation:string = 'here is some text';
  numberInterpolation:number = 342;
  
  constructor() { }

  ngOnInit() {
  }

  onTest(a) {
    return true;
  }

}
