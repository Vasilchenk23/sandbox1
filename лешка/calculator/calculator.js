
let a = '';//first number
let b = '';//secon number
let sign =''; //знак операции
let operationPerformed = false;
let finish = false;
let num = -1;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/', '%', '+/-'];

//экран
const out = document.querySelector('.calc-screen p');

function clearAll(){
    a = '';//first number
    b = '';//secon number
    sign = ''; //знак операции
    operationPerformed = false;
    out.textContent = a;
}

document.querySelector('.ac').onclick = clearAll;
//нажата не кнопка
document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
//нажата кнопка ClearAll ac
    if (event.target.classList.contains('ac')) return;

        out.textContent = '';
    // получаю нажатую кнопку
    const key = event.target.textContent;

    //если нажата кнопка 0-9 или точка
    if(digit.includes(key)) {
        if(!sign) {
            a += key;
            out.textContent = a;         
        }
        else if(a!== '' && b!== '' && finish) {
           
        }
         else {
            b += key;
            out.textContent = b;
        }
       console.table(a, b, sign);
       return;
    }

    //если нажата клавиша + - / *
    if(action.includes(key)){
        sign = key;
        out.textContent = sign;
        console.table(a, b, sign);
        return;
    }

 // нажата кнопка +/-
    if(key === '+/-') {
        if(!sign) {
            a = (+a * -1).toString();
            out.textContent = a;
        } else {
            b = (+b * -1).toString();
            out.textContent = b;
        }
        console.table(a, b, sign);
        return;
    }

    // нажата =
    if(key === '=') { 
        if (sign && b)  {
            switch (sign) {
                case '+' :
                    a = (+a) + (+b);
                    break;
                case '-':
                    a = a - b;
                    break;
                case 'X':
                    a = a * b;
                    break;
                case '/':
                    a = a / b;
                    break;
                case '%' :
                    a = (+a) * b/100;
                    break;
                case '+/-':
                    a = -1 * a;
                      break;
            }
            out.textContent = a;
            b = '';
            operationPerformed = true;
            console.table(a, b, sign)
        }
        return;
    }
};
