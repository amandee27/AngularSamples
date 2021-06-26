import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'counter-app';
  sum:number=0;
  currentNo:string="0";
  sign:string="";
  readNoOutput:boolean=false;

  ngOnInit(){}
  readNo(buttonValue :string){
    if(buttonValue==="0" && this.currentNo==="0"){
      this.currentNo="0";
    }else if(buttonValue!=="0" && this.currentNo==="0"){
      this.currentNo=buttonValue;
    }else{
      this.currentNo=this.currentNo+buttonValue;
    }
    this.readNoOutput=true;
  }

  readSign(buttonValue:string){
    if(this.sign===""){
      this.sum=parseFloat(this.currentNo);
      this.currentNo="0";
    }
    if(this.sign==="+"){
      this.add();
    }

    if(this.sign==="-"){
      this.subtract();
    }

    if(this.sign==="/"){
      this.divide();
    }

    if(this.sign==="*"){
      this.multiply();
    }

    if(this.sign==="%"){
      this.modulus();
    }
    this.sign=buttonValue;
    this.readNoOutput=false;
  }

  readEqual(buttonValue:string){
  }

  backSpace(){
    this.currentNo=this.currentNo.slice(0, -1);
    if(this.currentNo===""){
      this.currentNo="0";
    }
  }
  clear(){
    this.sum=0;
    this.currentNo="0";
    this.sign="";
  }

  add(){
    this.sum=this.sum + parseFloat(this.currentNo);
    this.currentNo="0";
  }

  subtract(){
    this.sum=this.sum-parseFloat(this.currentNo);
    this.currentNo="0";
  }

  divide(){
    this.sum=this.sum/parseFloat(this.currentNo);
    console.log(this.sum);
    this.currentNo="0";
  }

  multiply(){
    this.sum=this.sum*parseFloat(this.currentNo);
    console.log(this.sum);
    this.currentNo="0";
  }

  modulus(){
    this.sum=this.sum%parseFloat(this.currentNo);
    console.log(this.sum);
    this.currentNo="0";
  }
  
}
