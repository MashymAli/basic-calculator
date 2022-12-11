let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';

// calculate with buttons
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;

        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            try {
                screen.value = eval(screenValue);  
                screenValue = screen.value;     
            } catch (error) {
                screen.value="Error";
                screenValue="Error";
            }

        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

//calculate with keyboard
document.addEventListener('keydown',(e)=>{
    let pressedKey = e.key;
    //console.log(pressedKey)

    if(pressedKey=='=' || pressedKey=="Enter"){
        try {
            screen.value = eval(screenValue);  
            screenValue = screen.value;     
        } catch (error) {
            screen.value="Error";
            screenValue="Error";
        }
    }
    else if(pressedKey=="Backspace"){
        screen.value=screenValue.substring(0,screen.value.length*1 -1);
        screenValue=screen.value;
    }
    else if(pressedKey=='c' || pressedKey=='C'){
        screenValue = "";
        screen.value = screenValue;
    }
    else{
        screen.value += pressedKey
        screenValue += pressedKey
    }
  
})