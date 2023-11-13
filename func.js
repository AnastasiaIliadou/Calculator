
 function goodsomethring() {
   var today = new Date()
   var curTime = today.getHours()

   if (curTime < 12) {
     document.write('Good Morning')
   } else {
     document.write('Good Afternoon')
   }
 }

 console.log(goodsomethring())

  // This function clear all the values
  function clearScreen() {
    document.getElementById("result").value = "";
  }

  // This function display values
  function display(value) {
    document.getElementById("result").value += value;
  }

  // This function evaluates the expression and returns result
  function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
  }

 function FtoC(){
   var F = document.getElementById("result").value;
   var C=5*(F-32)/9;
   clearScreen();
   display(C);
 }

 function CtoF(){
   var C = document.getElementById("result").value;
   var F=(C*9)/5+32;
   clearScreen();
   display(F);
 }

 function keyFunction(event)
 {
   if (event.key == '0' || event.key == '1' ||
     event.key == '2' || event.key == '3' ||
     event.key == '4' || event.key == '5' ||
     event.key == '6' || event.key == '7' ||
     event.key == '8' || event.key == '9' ) {
     document.getElementById("result1").value += event.key
     document.getElementById("result").value += event.key

   }
   else {
     document.getElementById("result1").value = 0;
     document.getElementById("result").value = 0;

   }

 }
