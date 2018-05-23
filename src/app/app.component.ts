import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eliane\'s app';
  newInput : string = '';
  myarr: Array<any>;

  constructor(){    
    let localArr = localStorage.getItem('starter-list')?localStorage.getItem('starter-list'):'[]';
    this.myarr = JSON.parse(localArr);
  }
  

  add(){
    console.log(this.newInput);
    if(this.newInput){
      this.myarr.push({id : this.myarr.length + 1,name:this.newInput});
      this.newInput = '';
      localStorage.setItem('starter-list', JSON.stringify(this.myarr));
    }
  }

  remove(index){
    console.log(index)
    this.myarr.splice(index,1);
    localStorage.setItem('starter-list', JSON.stringify(this.myarr));
  }
}
