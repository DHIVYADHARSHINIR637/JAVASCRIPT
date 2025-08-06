let num=10;
let sum=0;
for(let i=1;i<=num;i++){
    if(i%2==0)
    {
        continue;
    }
    sum=sum+i;
}
console.log(sum);
