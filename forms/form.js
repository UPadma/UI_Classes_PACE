var readtvalue=()=>{
    var x=document.querySelector("#fval").value;
    x=parseInt(x)
    var y=document.querySelector("#sval").value
    y=parseInt(y)
    var exe=document.querySelector("#option").value
    var result=0
    switch(exe){
        case "sum": result=x+y; break;
        case "sub": result=x-y;break;
        case "mul": result=x*y; break;
        case "div": result=x/y; break;
        default: result="Wrong Choice"; break;
    }
    document.querySelector("#res").innerHTML=result
    

}