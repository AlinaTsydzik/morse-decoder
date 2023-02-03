const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    let k = 0;
    let i = 0;
    let newArr = [];

    for(let i=0; i<= expr.length; i=i+10){
        arr[k] = expr.slice(i, i+10);
        k++;
    }
   

for(let i=0; i<arr.length; i++){
    for(let i2=0; i2<10; i2++){
        if(arr[i][i2]==='*'){
            newArr[i] = ' ';
            break;
        }
        if(arr[i][i2]==='1') {
            newArr[i] = arr[i].slice(i2,10);
            break;
        }            
    }
}
console.log(newArr);
newArr = newArr.map((str) => { 
    if (str  === ' ') return ' ';
    str = str.replace (/00/ig,''); 
    str = str.replace (/10/ig,'.');
    str = str.replace (/11/ig,'-');
    return MORSE_TABLE[str];
 });
console.log(newArr);
return newArr.join('');     
}

module.exports = {
    decode
}