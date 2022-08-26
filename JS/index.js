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
            screen.value = eval(screenValue);
            screenValue = screen.value; 
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

//calculate with keyboard
document.addEventListener('keydown',(e)=>{
    if(e.key==0){
        screen.value += e.key;
        screenValue+=e.key;
    }
    else if(e.key==1){
        screen.value += e.key;
        screenValue+=e.key;
    }
    else if(e.key==2){
        screen.value += e.key;
        screenValue+=e.key;
    }
    else if(e.key==3){
        screen.value += e.key;
        screenValue+=e.key;
    }
    else if(e.key==4){
        screen.value += e.key;
        screenValue+=e.key;
    }
    else if(e.key==5){
        screen.value += e.key;
        screenValue+=e.key;
    }
    else if(e.key==6){
        screen.value += e.key;
        screenValue+=e.key;
    }
    else if(e.key==7){
        screen.value += e.key;
        screenValue+=e.key; 
    }
    else if(e.key==8){
        screen.value += e.key;
        screenValue+=e.key;
    }
    else if(e.key==9){
        screen.value += e.key;
        screenValue+=e.key;
    }
    else if(e.key=='+'){
        screen.value += e.key;
        screenValue+=e.key; 
    }
    else if(e.key=='-'){
        screen.value += e.key;
        screenValue+=e.key;
    }
    else if(e.key=='/'){
        screen.value += e.key;
        screenValue+=e.key;
    }
    else if(e.key=='x' || e.key=='*'){
        e.key1='*';
        screen.value += e.key1;
        screenValue+=e.key1;
    }
    else if(e.key=='c' || e.key=='C'){
        screenValue = "";
        screen.value = screenValue;
    }
    else if(e.key=='=' || e.key=="Enter"){
        screen.value = eval(screenValue);  
        screenValue = screen.value;     
    }
    else if(e.key=="Backspace"){
        screen.value=screenValue.substring(0,screen.value.length*1 -1);
        screenValue=screen.value;
    }
    else if(e.key=="CapsLock"){
        pass

    }
    else{
        alert("Invalid input!!");
    }
})


