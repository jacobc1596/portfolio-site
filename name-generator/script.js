function getName(){

    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var rndLetter = alphabet[Math.floor(Math.random()*alphabet.length)];

    let vowel = ["a","e","i","o","u"];
    var rndVow = vowel[Math.floor(Math.random()*vowel.length)];

    let consonant = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"]
    var rndCons = consonant[Math.floor(Math.random()*consonant.length)];

    let suffix = [rndVow + "gorn", rndCons + "ark", rndCons + "eth", rndCons + "ok",rndCons + "arth", rndVow +"vak", rndVow + "do", 
    rndVow + "ta", rndCons + "al", rndCons +"on", rndVow +"xa", rndCons + "vo", rndVow +"tak",  rndCons + "ara", rndCons +"olo", 
    rndVow +"nio"];

    var rndSuf = suffix[Math.floor(Math.random()*suffix.length)];

    let output = document.querySelector('.output p');
    let btn = document.getElementsByTagName('button')[0];
     
    var inputName = document.getElementById('nameValue').value;
    if(inputName != ''){
        output.innerHTML = inputName.substring(0,2) + rndLetter + rndSuf;
    };

}