let age=18;
let gender="f";
if(age>=18 && gender=="f")
{
    console.log("Eligible");
}
if(age>=21 || age>=18 && gender=="f")
{
    console.log("eligible");
}
else{
    console.log("Not Eligible");
}
let age1;
let current_age1=age1 ?? 19;
console.log(current_age1   );
