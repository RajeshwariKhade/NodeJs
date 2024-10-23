function factr(a)
{
    if (a < 0) return "Undefined for negative numbers";
    let result = 1;
    for(let i=1;i<=a;i++)
    {
        result=result*i;
        
    }
    return result;
}
module.exports=
{
    factr
};