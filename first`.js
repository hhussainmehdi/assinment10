 alert("YOUR CREATER  IS ALLAH ALMIGHTY")     

    let statement = "alert(' ALLAH ALMIGHTY')"



document.getElementById("userName").onclick =function(){
    let fullName= prompt("Enter Your Name" )
    let statement= "User name is =" 

document.getElementById("statement").innerHTML =statement+fullName;
document.getElementById("output").innerHTML =fullName;
}

//  ConcatenateString
document.getElementById("concatenateString").onclick =function(){

// letconcatenateString = prompt("pleaseConcatenateString" )
let num1=prompt("Enter num1" );
let num2=prompt("Enter num2" );
let sum=num1+num2;

let statement="Enter num1+Enter num1 = show in output" 

document.getElementById("statement").innerHTML = statement;
document.getElementById("output").innerHTML =sum;

}
document.getElementById("compositionOperator").onclick =function(){
    let firstName=prompt("please Enter thr First Name")
    let lASTName=prompt("please Enter thr First Name")
    let fullName=firstName+lASTName;
    if(firstName+lASTName=="Hussain+Mehdi"){
        alert("correct")
    }
    else{
        alert("incorect")
    }
    document.getElementById("output").innerHTML=fullName;
}
// document.getElementById("").onclick=function(){
//     let firstNum
// }



             //  ifandElse
document.getElementById("else").onclick =function(){
    let height =  +prompt("Enter Your height in feet:" )
    let msg="";
    
    if (height >= 10){
        alert("you are taller")
        msg= "you are taller"
        document.getElementById("output").innerHTML=msg;

    }
    else if(height >=7 ){
        msg= "you are tall"
        alert("you are tall ")

    }
    else{
        msg= "you are small"
        alert("you are small")

    }

    // alert(msg);
    document.getElementById("output").innerHTML=msg;
}
    document.getElementById("testing").onclick=function(){
        let num1=prompt("Enter Frist Name")
        let num2=prompt("Enter Frist Name")
        let sum= num1+num2;
        let msg="";
        if(num1==num2){

        msg="correct"
        alert("correct")
    }
    else{
        msg="incorrect"
        alert("Wrong Number")
    }
    document.getElementById("output").innerHTML=msg;
}
          // NESTED IF ELSE
document.getElementById("statementNested").onclick =function(){
    let marks =  prompt("Enter Your Marks:" )
    let msg="";
    
    if (marks >= 90){
        msg= "you got A+ Grade"
        alert("you got A+ Grade")
         if(marks >= 96){
            msg= "you got a free trip of lahore and gold madel"
            alert("you got a free trip of lahore and gold madel")
        }
        else{
            msg= "you just Got A gold madel"
            alert("you just Got A gold madel")
        }


        // msg= "you are taller"
        document.getElementById("output").innerHTML=msg;

    }
    else if(marks >=70 ){
       
        alert("you Got A Grade ")
        if(marks >= 80){
            msg= "you got a silver Gold Madel"
            alert("you got a silver Gold Madel")
        }
        else{
            
            msg= "you got a Iron Gold Madel"
            alert("YOu Got A Iron Gold Madel")
        }

    }
    else if(marks>=50){
        msg= "you Got b Grade"
        alert("you Got B Grade")
        if(marks >= 60){
            msg= "you got a Platisc tropy"


            alert("you got a Platisc tropy")
        }
        else{
            msg= "you got candy"
            alert("you got candy")
        }


    }
    else if(marks <= 50){
        msg= "you are Fail"
        alert="You Are Fail"
        if(marks >= 40){
            msg= "you have a chance of sapply"
            alert("you have a chance of sapply")
        }
        else{
            msg= "otherwise You Are Resticated From colleg"
            alert("otherwise You Are Resticated From colleg")
        }

    }
    // alert(msg);
    document.getElementById("output").innerHTML=msg;

}


// LoGIN PAGE
   
document.getElementById("jafa").onclick = function(){
    var userName=+prompt("Enter The User Name");

    var userPassword=+prompt("Enter The User Password");
let statement1= "<li>User Name Should start from upercase word <br/>"
let statement2= "<li>User Password Should be in  form of  Number"
let finalStatement=statement1+statement2;
    if(userName=="Hussain" && password== "123" ){
        msg="User is logged in"
        alert("User is Logged In")
    }
    else{
        msg="User Name Or Passwor Is Wrong"
        alert("User Name Or Password is Wrong")
        
    }
    document.getElementById("statement").innerHTML=finalStatement;
    document.getElementById("output").innerHTML=msg;
}




document.getElementById("cleanstate").onclick = function(){

    document.getElementById("statement").innerHTML ="";

}
document.getElementById("cleanButton").onclick = function(){

    document.getElementById("output").innerHTML ="";
}
   