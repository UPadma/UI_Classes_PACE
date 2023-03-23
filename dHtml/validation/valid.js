var getsum=()=>{
    var x=document.querySelector("#fval").value;
    var y=document.querySelector("#sval").value;
    x=parseInt(x)
    y=parseInt(y)
    var result=x+y
    document.querySelector("#result").innerHTML=result
 }
var userinput=(event)=>{
    console.log(event)
    if(event.keyCode>=48 && event.keyCode<=57){
        document.querySelector("#dt").innerHTML="Please Enter Below 3 numbers"
        return true
    }else{
        return false
    }

} 