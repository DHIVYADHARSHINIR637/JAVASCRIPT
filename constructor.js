function Demo()
{
    this. num1=20;
    this.num2=30;
    this.add=function(num3){
        return this.num1+this.num2+num3;
    }
}
let sum=new Demo();
console.log(sum.add(50));
