var num1;
var num2;
var incr;


$(function(){
  $("form").submit(function(event) {
    event.preventDefault();
      num1 = parseInt($("input#inputNum1").val());
      num2 = parseInt($("input#inputNum2").val());
      incr = num1;
      // alert(num1+" "+num2);
      if(isNaN(num1)  || isNaN(num2)) {
        alert("Please enter a valid number");
      } else if (num1 > num2) {
      alert("Please enter a number smaller than your count to number");
      } else if (num1 <=0 || num2 <=0) {
          alert("Please enter a number that is higher than 0");
      } else {
          for (var index = num1; num1 <= num2; num1 += incr) {
            $("#output").append("<li>"+num1+"</li>");

        // alert(num1);
      }
    }
  });

});
