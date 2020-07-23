# Javascript


### Introduction
This repository houses a load of test code I have worked on throughout my journey through Javascript. Most of the code is testing different features and functions.

### Some notable features.

### Calculator Javascript functions
For the digit and decimal.
```Javascript 
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = Calculator;
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

function Input_Decimal(dot) {
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
    }
}

```
### TicTacToe dice roll

```Javascript
function rollForTurn() {
	var xArray = [];
	var ranNum = '';
	var minimum = 1;
	var maximum = 11;
    var first = "";
    var txt1 = "";
	for (var i = 0; i < 2; i++) {
		ranNum = Math.floor(Math.random()*(maximum - minimum) + minimum);
		xArray.push(ranNum);
	}
    diceRoll();
    for (i=0;i<xArray.length;i++) {
		var result = i + 1;
        var pOne = xArray[0];
		var pTwo = xArray[1];
		if (pOne == pTwo) { 
			pOne = 1;
			pTwo = 2;
		}
        txt1 = "Player 1 rolled ["+pOne+"]<br>";
        writeMsg(txt1);
        txt1 = txt1 + "Player 2 rolled ["+pTwo+"]<br><br>";
    	setTimeout(function() {writeMsg(txt1);}, 1000); 
    }
    
    ```

### Contact and links
- [Github](https://github.com/Gruzzly-bear)
- [Email](mailto:MB.Bowen@outlook.com?subject=Hey%20There!)
- [Website](https://gruzzly.co)
