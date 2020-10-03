/*
var buttons = document.getElementsByClassName("button")
var display = document.getElementById("result")
var operators = ["+","/","-","%","*"]
var operands = ["1","2","3","4","5","6","7","8","9","0","."]
var op1 = ""
var op2 = ""
var result = 0 
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        var value = buttons[i].innerText
    if (value == "AC"){
        display.innerText = "0"
        op1 = ""
        op2 = ""
        return;
    }
    if (operators.includes(value)){
        op2 = op2 + op1 + value;
        op1 = ""
        display.innerText = ""
    }
    else if (operands.includes(value)){
        op1 += value
        if (op1.length == 8){
            display.innerText = "Smaller Input"
            op1 = ""
            op2 = ""
            return;
        }
        display.innerText = op1
    }
    else if (value == "="){
        op2 += op1
        console.log(op2,"hi")
        try{result = eval(op2)
            result = result.toFixed(10)
            display.innerText = result
        }
        catch(err){
            display.innerText = "Restart"
        }
        finally{
            op2 = ""
            op1 = result
        }
    }
    })
}
*/





var buttons = $(".button")

var display = $("#result")

var operators = ["+","/","-","%","*"]

var operands = ["1","2","3","4","5","6","7","8","9","0","."]

var op1 = ""

var op2 = ""

var result = 0





$(".button").click(function(){


    var value = $(this).text()


    if (value == "AC"){


        $("#result").text("0")

        op1 = ""

        op2 = ""
        
        return;


    }

alert(value);
    if (operators.includes(value)){
alert('hello');

        op2 = op2 + op1 + value;

        op1 = ""

        $("#result").text("")


    }


    else if (operands.includes(value)){


        op1 += value

        console.log(value)

        if (op1.length == 8){


            $("#result").text("Smaller Input")

            op1 = ""

            op2 = ""

            return;


        }

        console.log(op1)


        $("#result").text(op1)


    }
    

    else if (value == "="){


        op2 += op1


        try{result = eval(op2)


            result = result.toFixed(10)

            $("#result").text(result)


        }
        catch(err){


            $("#result").text("Restart")


        }
        finally{


            op2 = ""

            op1 = result


        }


    }

    
})
