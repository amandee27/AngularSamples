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
  currentNew:string="0";
  sumOld:string="0";
  sign:string="";
  readNoOutput:boolean=false;
  decimal:boolean=false;
  equal:boolean=false;
  equalSign:string="=";

  ngOnInit(){}
  readNo(buttonValue :string){
    if(buttonValue==="0" && this.currentNo==="0"){
      this.currentNo="0";
    }else if(buttonValue!=="0" && this.currentNo==="0" && buttonValue!=="."){
      this.currentNo=buttonValue;
    }else if(this.currentNo==="0" && buttonValue==="."){
      this.currentNo=this.currentNo+buttonValue;
    }else if(buttonValue==="." && this.decimal===true){
      this.currentNo=this.currentNo;
    }else if(this.currentNo!=="0" && this.decimal===true){
      this.currentNo=this.currentNo+buttonValue;
    }else{
      this.currentNo=this.currentNo+buttonValue;
    }

    if(buttonValue==="."){
      this.decimal=true;
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
    this.sign=buttonValue;
    this.readNoOutput=false;
    this.equal=false;
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
    this.currentNew="0";
    this.sumOld="0";
    this.decimal=false;
    this.equal=false;
  }

  clearEqual(){
    this.currentNo="0";
  }

  readEqual(buttonValue:string){
    
    
    
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
    this.readNoOutput=false;
    this.equal=true;
  }

  presentageSign(){
    if(this.sign!==""){
      this.currentNo=(parseFloat(this.currentNo)/100).toString();
    }else{
      this.currentNo="0";
    }
    
  }

  add(){
    this.sumOld=this.sum.toString();
    this.sum=this.sum + parseFloat(this.currentNo);
    this.currentNew=this.currentNo;
    this.currentNo="0";
    this.decimal=false;
  }

  subtract(){
    this.sumOld=this.sum.toString();
    this.sum=this.sum-parseFloat(this.currentNo);
    this.currentNew=this.currentNo;
    this.currentNo="0";
    this.decimal=false;
  }

  divide(){
    this.sumOld=this.sum.toString();
    this.sum=this.sum/parseFloat(this.currentNo);
    this.currentNew=this.currentNo;
    this.currentNo="0";
    this.decimal=false;
  }

  multiply(){
    this.sumOld=this.sum.toString();
    this.sum=this.sum*parseFloat(this.currentNo);
    this.currentNew=this.currentNo;
    this.currentNo="0";
    this.decimal=false;
  }

  
  
}
