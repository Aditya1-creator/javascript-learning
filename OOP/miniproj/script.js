class Accdetails{
    constructor(name,accno,bal){
        this.name=name;
        this.accountno=accno;
        this.balance=bal;
    }
    
}

Accdetails.prototype.seedets=function(){
    console.log(this.name);
    console.log(this.accountno);
    console.log(this.balance);
}
Accdetails.prototype.deposite=function(ammount){
    this.balance=this.balance+ammount;
    console.log(this.balance);
}
Accdetails.prototype.withdraw=function(ammount){
    this.balance=this.balance-ammount;
     console.log(this.balance);
}
let a1=new Accdetails("aditya",123,1000)
let a2=new Accdetails("sui",12345,10000000)

a1.seedets();
