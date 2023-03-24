var validation=(event)=>{
    console.log(event)
    var accname=document.querySelector("#acname").value;
    if(event.keyCode>=65 && event.keyCode<=90){
        return true
    }else{
        document.querySelector("#dt").innerHTML="Please Enter Capital letters"
        document.querySelector("#dt").style.color="red"
        return false
    }
}
var validationnum=(event)=>{
    var accnum=document.querySelector("#acnum").value;
    if(event.keyCode>=48 && event.keyCode<=57){
        return true
    }else{
        document.querySelector("#dtt").innerHTML="Number Should have 11 numbers"
        document.querySelector("#dtt").style.color="red"
        return false
    }
}
var validationpass=(event)=>{
    var acpass=document.querySelector("#ps").value;
    document.querySelector("#dtn").innerHTML="Password Should have 8 letter included @/# Capitel letter and number"
    document.querySelector("#dtn").style.color="red"
}
var dosubmit=()=>{
    alert("submit Successfull")
}