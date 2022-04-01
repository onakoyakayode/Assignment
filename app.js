


let a;
let b;

let triangle = [1, 2, 3, 4, 5, 6, 7];

for (let a = 0; a < triangle.length; a++) {
    for (let b = 0; b <= a; b++) {
        document.write("#");
    }
    document.write('<br />');
}

document.write('<br />')
document.write('<br />')



for (let num = 1; num < 101; num++) {
    let remainderThree = num % 3;
    let remainderFive = num % 5;

    if ((remainderThree == 0) && (remainderFive == 0)) {
        document.write("FizzBuzz");
        document.write('<br />');
    } else if (remainderThree == 0) {
        document.write("Fizz");
        document.write('<br />');
    } else if (remainderFive == 0) {
        document.write("Buzz")
        document.write('<br />');
    } else {
        document.write(num);
        document.write('<br />');
    }
}


document.write('<br />')
document.write('<br />')


let board = "";
let size = 8;

for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#"
        }
    }

    board += "\n";
}

document.write(board);



//Calculator

let display = document.getElementById('display');

let button = Array.from(document.getElementsByClassName('button'));

button.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'AC':
                display.value = '';
                break;
            case "C":
                if (display.value) {
                    display.value = display.value.slice(0, -1);
                }
                break;
            case '=':
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = "Err!"
                }
                
                break;  
            default:
                display.value += e.target.innerText;
        }
    });
});



