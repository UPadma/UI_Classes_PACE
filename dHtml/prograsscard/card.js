var studentdata={
    gettotalavg(){
        this.total=0
        for(i=0;i<this.marks.length;i++){
            this.total+=this.marks[i]
        }
        this.avg=this.total/this.marks.length
    },
    getstudentgrade(){
        if(this.avg>40){
            this.grade="Student Passed"
        }else{
            this.grade="student failed"
        }
    },
    displaystudentdetails(){
        this.gettotalavg();  //calling function
        this.getstudentgrade();// calling fun

        console.log("student Name  :"+this.sname)
        console.log("Student Class :"+this.sclass)
        console.log("student Gender :"+this.sgender)
        console.log("Student Total :"+this.total)
        console.log("Student Average"+this.avg)
        console.log("Stdent Grade :"+this.grade)

        document.querySelector("#dname").innerText=this.sname;
        document.querySelector("#dclass").innerText=this.sclass;
        document.querySelector("#dgender").innerText=this.sgender;
        document.querySelector("#dtotal").innerText=this.total;
        document.querySelector("#davg").innerText=this.avg;
        document.querySelector("#dgrade").innerText=this.grade;


    }

}
var readuserdata=()=>{
    studentdata.sname=document.querySelector("#sname").value; 
    studentdata.sclass=document.querySelector("#sclass").value;
    studentdata.sgender=document.querySelector("input[name=gender]:checked").value;
    studentdata.marks=[];

    // studentdata.marks.push(parseInt(document.querySelector("#m1").value));

    for(var i=1;i<=5;i++){
        var id="#m"+i
        studentdata.marks.push(parseInt(document.querySelector(id).value));
        // var marksvalue=document.querySelector(id).value;
        // marksvalue=parseInt(marksvalue)
        // studentdata.marks.push(marksvalue)
    }
    console.log(studentdata)
    studentdata.displaystudentdetails();
    document.querySelector(".progarsscardblock").style.display="block"

}