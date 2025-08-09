
function operation(op,a,b)
{
    return op(a,b);
}
function add(a,b)
{
    return a+b;
}
function sub(a,b)
{
    return a-b;
}
console.log(operation(add,2,3))
