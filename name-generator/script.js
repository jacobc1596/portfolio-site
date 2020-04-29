let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let vowel = ["a","e","i","o","u"];
let consonant = ["b","c","d","f","g","h","j","k","l","m","n","p","qu","r","s","t","v","w","x","y","z"]
let suffix = ["gorn", "ark", "eth","ok","narth", "vak", "do", "ta","al","on","xa","vo","tak","ara","olo","nio"];

var output = document.querySelector('.output p');
let btn = document.getElementsByTagName('button')[0];

function getName(){
    
    var rndLetter = alphabet[Math.floor(Math.random()*alphabet.length)];
    var rndCons = consonant[Math.floor(Math.random()*consonant.length)];
    var rndVow = vowel[Math.floor(Math.random()*vowel.length)];
    var rndSuf = suffix[Math.floor(Math.random()*suffix.length)];
  
    var inputName = document.getElementById('nameValue').value;
    if(inputName != ''){
        output.innerHTML = inputName.substring(0,2) + rndLetter + rndSuf;
    };

}