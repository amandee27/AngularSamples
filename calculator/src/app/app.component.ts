import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'counter-app';
  value:any="";
  sum:number=0;
  currentNo:number=0;
  sum2:number=0;
  sign:string="";
  readNoOutput:boolean=false;
  decimal:number=0;
  n:number=0;
  decimalSign:string="";

  ngOnInit(){}
  readNo(buttonValue :number){
    
    if(this.decimalSign==="."){
      this.n=this.n+1;
      this.currentNo=parseFloat((this.currentNo+buttonValue/(Math.pow(10, this.n))).toPrecision(15));
      return;
    }
    this.currentNo=(this.currentNo*10)+buttonValue;
    this.readNoOutput=true;
    this.n=0;
  }

  readSign(buttonValue:string){
    if(this.sign===""){
      this.sum=this.currentNo;
      this.currentNo=0;
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
    this.decimalSign="";
  }

  readDecimal(buttonValue:string){
    this.decimalSign=buttonValue;  
  }

  readEqual(buttonValue:string){
  }

  backSpace(){
    this.currentNo=Math.floor(this.currentNo/10);
  }
  clear(){
    this.sum=0;
    this.currentNo=0;
    console.log(this.sum);
    this.sign="";
    this.decimalSign="";
  }

  add(){
    if(this.decimalSign==="."){
      this.sum=this.sum +this.decimal;
      this.currentNo=0;
      this.value="";
      this.decimalSign="";
      return;
    }
    this.sum=this.sum + this.currentNo;
    console.log(this.sum);
    this.currentNo=0;
    this.value="";
    this.decimalSign="";
  }

  subtract(){
    this.sum=this.sum-this.currentNo;
    console.log(this.sum);
    this.currentNo=0;
    this.value="";
    this.decimalSign="";
  }

  divide(){
    this.sum=this.sum/this.currentNo;
    console.log(this.sum);
    this.currentNo=0;
    this.value="";
    this.decimalSign="";
  }

  multiply(){
    this.sum=this.sum*this.currentNo;
    console.log(this.sum);
    this.currentNo=0;
    this.value="";
    this.decimalSign="";
  }

  modulus(){
    this.sum=this.sum%this.currentNo;
    console.log(this.sum);
    this.currentNo=0;
    this.value="";
    this.decimalSign="";
  }
  percentage(){
    this.sum=(this.sum)+(this.currentNo/10)
    this.currentNo=0;
    this.value="";
    this.decimalSign="";
  }
  
}
