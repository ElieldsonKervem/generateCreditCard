//vamos pegar o elemento com id cardRegister

const cardRegister = document.getElementById('cardRegister'); //pegando o elemento com id cardRegister
const cardLogin = document.getElementById('cardLogin'); //pegando o elemento com id cardLogin
const form = document.getElementById('formCard'); //pegando o elemento com id form
const formLogin = document.getElementById('formLogin'); //pegando o elemento com id formLogin
const cardName = document.getElementsByClassName('cardName'); //pegando o elemento com id cardName
const cardForm = document.getElementsByClassName('cardForm'); //pegando o elemento com id cardForm
const cardFormLogin = document.getElementsByClassName('cardFormLogin'); //pegando o elemento com id cardFormLogin
const nameUser = document.getElementById('nameUser'); //pegando o elemento com id nameUser
const getNameCard = document.getElementById('getNameCard'); //pegando o elemento com id getNameCard
const password = document.getElementById('passwordKey'); //pegando o elemento com id password
const cvv = document.getElementById('cvvKey'); //pegando o elemento com id cvv
const btnRegister = document.getElementById('btnSubmit'); //pegando o elemento com id btnRegister
const cardNameReflect = document.getElementsByClassName('cardName');
const numberCard = document.getElementById('numberCard'); //pegando o elemento com id numberCard //pegando o elemento com id cardNameReflect
const cardUserNameReflected = document.getElementById('cardUserNameReflected'); //pegando o elemento com id cardUserNameReflected
const dataCardReflect = document.getElementById('dataCardReflect'); //pegando o elemento com id dataCardReflect
const cvvCardReflected = document.getElementById('cvvCardReflected'); //pegando o elemento com id cvvCardReflected
const registerForm = document.getElementById('registerForm'); //pegando o elemento com id registerForm
const numberCardReflected= document.getElementById('numberCardReflected'); //pegando o elemento com id numberCardReflected

//previnir evento de formulario

form.addEventListener('submit', (e) => {
    e.preventDefault();
} );


function GenerateCard(){
    console.log('teste');
}

//ler valores dos inputs

function readValues(){
    return nameUser.value;
}
nameUser.addEventListener('input', (valor) => {
       valor.target.value = cardUserNameReflected.innerHTML = readValues();
});

//gravar valores no card refletido

//ler numero do cartao

function readNumberCard(){
    return numberCard.value;
}
numberCard.addEventListener('input', (valor) => {
    valor.target.value = numberCardReflected.innerHTML = readNumberCard();
    readFlagCard(valor.target.value);
});

//ler valor do cvv do cartao

function readCvvCard(){
    return cvv.value;
}
cvv.addEventListener('input', (valor) => {
    valor.target.value = cvvCardReflected.innerHTML = readCvvCard();
    readDataCard();
});

//criar a data de validade do cartao

function readDataCard(){
    return dataCardReflect.innerHTML = '01/25';
}
//let a bandeira do cartão

function readFlagCard(valor){
   
    if(valor[0] == 4){
      cardNameReflect[0].innerHTML = 'Visa';
      cardName[1].innerHTML = 'Visa';
      cardName[2].innerHTML = 'Visa';    
    }else if(valor[0] == 5){
        return cardNameReflect[0].innerHTML = 'MasterCard';
    }else if(valor[0] == 3){
        return cardNameReflect[0].innerHTML = 'American Express';
    }else if(valor[0] == 6){
        return cardNameReflect[0].innerHTML = 'Discover';
    }else{
         cardNameReflect[0].innerHTML = 'Cartão não identificado';
         cardName[1].innerHTML = 'Cartão não identificado';
             cardName[2].innerHTML = 'Cartão não identificado';
    }
}