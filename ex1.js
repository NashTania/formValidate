var formDef1=
[
  {label:'Название сайта:',kind:'longtext',name:'sitename'},
  {label:'URL сайта:',kind:'longtext',name:'siteurl'},
  {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
  {label:'E-mail для связи:',kind:'shorttext',name:'email'},
  {label:'Рубрика каталога:',kind:'combo',name:'division',
    variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
  {label:'Размещение:',kind:'radio',name:'payment',
    variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
  {label:'Разрешить отзывы:',kind:'check',name:'votes'},
  {label:'Описание сайта:',kind:'memo',name:'description'},
  {label:'Опубликовать:',kind:'submit'},
];

window.onload = function getForm(){
  var newForm = document.createElement("div");
  document.body.appendChild(newForm);

    for(var i = 0; i < formDef1.length; i++){
      var newObject = formDef1[i];

      var newLabel = document.createElement('label');
      newForm.appendChild(newLabel);
      newLabel.textContent = newObject.label;


      function addInput(){
        var newInput = document.createElement("input");
        newLabel.appendChild(newInput);
        newInput.type = 'text';

        newLabel.htmlFor = newObject.name;
        newInput.id = newObject.name;
        newInput.classList.add(newObject.kind);
      }


      switch(newObject.kind) {

        case 'longtext':
        addInput();
        break;

        case 'shorttext':
        addInput();
        break;

        case 'number':
        addInput();
        break;

        case 'combo':
          var newSelect = document.createElement('select');
          newLabel.appendChild(newSelect);


          for(var j = 0; j < newObject.variants.length; j++){
            var newOption = newObject.variants[j];
            newOption = document.createElement('option');
            newSelect.appendChild(newOption);

            newSelect.id = newObject.name;
            newOption.innerText = newObject.variants.texts;
          }
        break;

        case 'check':
        var newInput = document.createElement("input");
        newLabel.appendChild(newInput);
        newInput.type = 'checkbox';
        break;

        case 'radio':
        for(var g = 0; g < newObject.variants.length; g++){
          var newInput = newObject.variants[g];
          newInput = document.createElement("input");
          newLabel.appendChild(newInput);
          var newP = document.createElement("p");
          newLabel.appendChild(newP);
          newP.innerText = newObject.variants.text;
          //newOption.innerText = newObject.variants.text;
          newInput.type = 'radio';
        }
        break;

        case 'memo':
        var textarea = document.createElement('textarea');
        newLabel.appendChild(textarea);
        break;

        case 'submit':
        var newInput = document.createElement("input");
        newLabel.appendChild(newInput);
        newInput.type = 'submit';
        break;
      }


      var inputs = document.getElementsByTagName('input');
      for(var j = 0; j < inputs.length; j++) {
        var input = inputs[j];
          switch(input.id) {
          case 'sitename':
          input.classList.add('data-validation-required');
          break;

          case 'siteurl':
          input.classList.add('data-validation-required');
          input.classList.add('data-validation-URL');
          break;

          case 'visitors':
          input.classList.add('data-validation-required');
          input.classList.add('data-validation-number');
          break;

          case 'email':
          input.classList.add('data-validation-required');
          input.classList.add('data-validation-email');
          break;

          case 'description':
          input.classList.add('data-validation-required');
          break;
      }
    }
}
}
