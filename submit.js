
function isRequired() {
  var value = input.value;
  if(value < 0 || value === ''){
    var error = document.createElement('p');
    input.appendChild(error);
    error.innerText = "Поле пустое!";
    error.classList.add('pRed');
  }

}

function isURL() {
  var value = input.value;
  var reg = /^(ftp|http|https):\/\/[^ "]+$/;;
  if(reg.test(value) === false) {
  var error = document.createElement('p');
  input.appendChild(error);
  error.innerText = "Не верно введен URL!";
  error.classList.add('pRed');
}

}

function isEmail() {
  var value = input.value;
  if(!value.indexOf('@')) {
    var error = document.createElement('p');
    input.appendChild(error);
    error.innerText = "Не верно введен e-mail!";
    error.classList.add('pRed');
  }

}

function isNumber() {
  var value = input.value;
  if(isNaN(value)) {
  var error = document.createElement('p');
  input.appendChild(error);
  error.innerText = "Введите количество цифрами!";
  error.classList.add('pRed');
 }

}

/*var validate = [
  {required: isRequired},
  {URL: isURL},
  {email: isEmail},
  {number: isNumber}
]*/

function getError(){
  var inputs = document.getElementsByTagName('input');
  for(var j = 0; j < inputs.length; j++) {
    var input = inputs[j];
    if(input.dataset.required) {
      isRequired();
    }

    else if(input.dataset.URL) {
      isURL();
    }

    else if(input.dataset.email) {
      isEmail();
    }

    else if(input.dataset.number) {
      isNumber();
    }

  }
}
function submitForm(){
  var form = document.getElementsByTagName('div');
  form.addEventListener('submit', getError)
}
