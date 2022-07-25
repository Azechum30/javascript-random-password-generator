const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


// Grab the DOM elements

let generatePasswordEl = document.getElementById('generate-el')
generatePasswordEl.addEventListener('click', generatePasswordOne);
generatePasswordEl.addEventListener('click', generatePasswordTwo);

let copyTextEl = document.getElementById('copy');
copyTextEl.addEventListener('click', copyToClipboard);

let copyPasswordEl = document.getElementById('copy1')
copyPasswordEl.addEventListener('click', clipboardCopy)


let generatedPasswordOne = document.getElementById('random-password-one')
let generatedPasswordTwo = document.getElementById('random-password-two')

function generatePasswordOne(){
    let passwordLength = 16;
    let password = '';
    for(let i = 0; i < passwordLength; i++){
        let randomPassword = Math.floor(Math.random() * characters.length);
        password += characters[randomPassword];
    }
 generatedPasswordOne.value = password;
}

function generatePasswordTwo(){
    let passwordLength = 16;
    let passwordTwo = '';
    for (let i = 0; i < passwordLength; i++){
        let randomPasswordTwo = Math.floor(Math.random() * characters.length);
        passwordTwo += characters[randomPasswordTwo];
    }
    generatedPasswordTwo.value = passwordTwo;
}

function copyToClipboard (){
    let copyText = document.getElementById('random-password-one');
    copyText.select();
    document.execCommand('copy')
    alert("Copied password to clipboard ")
}

function clipboardCopy(){
    let copyPassWord = document.getElementById('random-password-two');
    copyPassWord.select();
    document.execCommand('copy');
    alert("Copied password to clipboard")
}