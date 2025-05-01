let input = '';

function functions(value){
    const output = document.getElementById('output');
    
    if (value == 'C'){
        input = input.slice(0,-1);
    }
    else if (value == 'AC'){
        input = '';
    }
    else if (value == '%'){
        input = input/100;
    }
    else if (value == '='){
        input = eval(input);
    }
    
    else{
        input = input + value;
    }
    output.textContent = input;
}