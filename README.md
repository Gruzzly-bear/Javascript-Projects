# Javascript


### Introduction
This repository houses a load of test code I have worked on throughout my journey through Javascript. Most of the code is testing different features and functions.

### Some notable features.

### Calculator Javascript functions
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


### Contact and links
- [Github](https://github.com/Gruzzly-bear)
- [Email](mailto:MB.Bowen@outlook.com?subject=Hey%20There!)
- [Website](https://gruzzly.co)
