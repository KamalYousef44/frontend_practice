
// print Odd numbers between 2 numbers
function Oddnumbers(start,end){
    for(let i = start ; i <=end; i++ ){
        if(i % 2 !== 0){
            console.log(i);
            
        }
    }


}
Oddnumbers(1,20)
/// Email validation using string functions
function eMail(){
    let email = document.getElementById("em");
    let eMail = email.value
    if(eMail.includes('@')&& eMail.indexOf('@')!== 0 && eMail.indexOf('@')!== eMail.length -1){
        alert("Valid email.");
        email.value = "";

    }else{
        alert("invalid email. '@'should not be at the first or last position")
        email.value = "";
       }
       
}
 // print random numbers and tha max number by using math object methods
 
 function random(){
    let num1=
    Math.ceil(Math.random()*10);
    let num2=
    Math.ceil(Math.random()*10);
    let num3=
    Math.ceil(Math.random()*10);
    let num4=
    Math.ceil(Math.random()*10);
    console.log(num1,num2,num3,num4)
    let maxNum = Math.max(num1,num2,num3,num4)
    console.log(maxNum);
    
 }
 random()
 //Adding string by using string object methods
 function addStr(str){
    if(str.startsWith("js")){
        return str

    }else{
        return "js" +str
    }
 }
 console.log(addStr("script"));
 console.log(addStr("jsfile"));
 function changeFont(){
    let para = document.querySelectorAll("p");
    para.forEach(paragraph=>{
        let currentSize = window.getComputedStyle(paragraph).fontSize;
        let newSize=parseFloat(currentSize)+2+"px";
        paragraph.style.fontSize = newSize;
    })
 }
 let counter1=0
 let counter2=0
 let counter3=0

function imagClick(imageid,counterid,countervar){
    document.getElementById(imageid).onclick=function(){
        countervar++;
        document.getElementById(counterid).textContent=countervar;

    }

}
imagClick('image1','counter1', counter1);
imagClick('image2','counter2', counter2);
imagClick('image3','counter3', counter3);
let btn5 = document.getElementById("clear");

btn5.onclick =function clearCounter(){
    document.getElementById("counter1").innerHTML=0;
    document.getElementById("counter2").innerHTML=0;
    document.getElementById("counter3").innerHTML=0;

}
    
// start clock 

var timer; 
let btn1 = document.getElementById("btn")
let btn = document.getElementById("btn1")

    btn1.onclick= function setTime(){
        timer =  setInterval(function(){
            var time = new Date()
            
            document.getElementById("timer").innerHTML =" Clock : " + time.toLocaleTimeString()
        
        
        },1000)

    }
    //stop clock
    btn.onclick= function stopClock(){
        clearInterval(timer)};
        
        for (let i = 1; i <= 6; i++) {
            document.write(`<h${i}>welcome to my page</h${i}>`);
          }

// change color of the background
          function changeColor(){
            var colors = ["red" , "yellow" , "green" , "pink" , "tomato"];
            var randomColor = colors[Math.floor(Math.random()*colors.length)];
            document.body.style.background= randomColor;
          }
          changeColor();
            
        


    
        
        

    

    


   


 
        
        

        

        
        

 
 
