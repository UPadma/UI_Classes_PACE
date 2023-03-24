var gn=()=>{
    var max=10;
    var randomno=Math.floor(Math.random()*max)
       return randomno
}
var glc=()=>{
    var lower=['a','b','c','d','e','f','g','h','i'];
    var ri=Math.floor(Math.random()*(lower.length));
    return lower[ri]

}
var guc=()=>{
    var upper=['A','B','C','D','E','F','G','H','I'];
    var ri=Math.floor(Math.random()*(upper.length));
    return upper[ri]

}
var gc=()=>{
    var capchavalue=gn()+glc()+guc()+guc()+gn()
    document.querySelector("#container").innerHTML=capchavalue
    document.querySelector("#container").style.color="blue"
}