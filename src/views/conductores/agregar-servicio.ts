import {QWidget, QLabel, FlexLayout, QPushButton, QLineEdit, QComboBox, QDate, QDateEdit } from '@nodegui/nodegui';

const container = new QWidget();
container.setObjectName("container");
container.setLayout(new FlexLayout());

const title = new QLabel();
title.setObjectName("title");
title.setText("Agregar servicio");

//formulario//
//...ID//

const contId = new QWidget();
contId.setObjectName("container-secondary")
contId.setLayout(new FlexLayout());

const labelId = new QLabel();
labelId.setText("Id");
labelId.setObjectName("label");

const inputIdService = new QLineEdit();
inputIdService.setObjectName("input");
inputIdService.addEventListener('textChanged', (text) => {
  const sanitizedText = text.replace(/\D/g,"")
  if(!!sanitizedText.length) inputIdService.setText(sanitizedText);
  else inputIdService.clear()
})

//...fin ID//
//...NAME//

const contName = new QWidget();
contName.setObjectName("container-secondary")
contName.setLayout(new FlexLayout());

const labelName = new QLabel();
labelName.setText("Nombre");
labelName.setObjectName("label");

const inputNameService = new QLineEdit();
inputNameService.setObjectName("input");
//...FIN NAME//

//...fecha//

const contDate = new QWidget();
contDate.setObjectName("container-secondary")
contDate.setLayout(new FlexLayout());

const labelDate = new QLabel();
labelDate.setText("Fecha");
labelDate.setObjectName("label");

const inputDateService = new QDateEdit();
inputDateService.setObjectName("input");

//...FIN FECHA//

//...HORAS LABORADAS//

const contHours = new QWidget();
contHours.setObjectName("container-secondary")
contHours.setLayout(new FlexLayout());

const labelHours = new QLabel();
labelHours.setText("Horas laboradas");
labelHours.setObjectName("label");

const inputHours = new QLineEdit();
inputHours.setObjectName("input");
inputHours.addEventListener('textChanged', (text) => {
    const sanitizedText = text.replace(/\D/g,"")
    if(!!sanitizedText.length) inputHours.setText(sanitizedText);
    else inputHours.clear()
  })
//...FIN HORAS LABORADAS//
//...TIPO DE TRANSPORTE//
const contTypeTransport = new QWidget();
contTypeTransport.setObjectName("container-secondary");
contTypeTransport.setLayout(new FlexLayout());

const labelTypeTransport = new QLabel();
labelTypeTransport.setText("Tipo de transporte");
labelTypeTransport.setObjectName("label");

const typeTransport = new QComboBox();
typeTransport.addItem(undefined, "Personas");
typeTransport.addItem(undefined, "Colectivo");
typeTransport.addItem(undefined, "Mercancía");
typeTransport.addItem(undefined, "Mercancía peligrosa");
typeTransport.setObjectName("input");

const contNumPersons = new QWidget();
contNumPersons.setObjectName("container-secondary");
contNumPersons.setLayout(new FlexLayout());
contNumPersons.hide();


const labelNumPersons = new QLabel();
labelNumPersons.setText("Número de personas");
labelNumPersons.setObjectName("label");

const inputNumPersons = new QLineEdit();
inputNumPersons.setObjectName("input");
inputNumPersons.addEventListener('textChanged', (text) => {
    const sanitizedText = text.replace(/\D/g,"")
    if(!!sanitizedText.length) inputNumPersons.setText(sanitizedText);
    else inputNumPersons.clear()
  })

const contCant = new QWidget();
contCant.setObjectName("container-secondary");
contCant.setLayout(new FlexLayout());
contCant.hide();
  
const labelCant = new QLabel();
labelCant.setText("Cantidad en toneladas");
labelCant.setObjectName("label");
  
const inputCant = new QLineEdit();
inputCant.setObjectName("input");
inputCant.addEventListener('textChanged', (text) => {
    const sanitizedText = text.replace(/\D/g,"")
    if(!!sanitizedText.length) inputCant.setText(sanitizedText);
    else inputCant.clear()
})


//...FIN TIPO DE TRANSPORTE//
//...BUTTONS//
const contButton = new QWidget();
contButton.setObjectName("container-button");
contButton.setLayout(new FlexLayout());

const saveAddService = new QPushButton();
saveAddService.setObjectName("button");
saveAddService.setText("Guardar");

const backAddService= new QPushButton();
backAddService.setObjectName("button");
backAddService.setText("Regresar");
//...FIN BUTTONS//

const error1 = new QLabel();
error1.setText("Debe diligenciar todos los campos");
error1.setObjectName("error1");
error1.hide();

const error2 = new QLabel();
error2.setText("El conductor no esta registrado");
error2.setObjectName("error2");
error2.hide();


container.layout?.addWidget(title);
container.layout?.addWidget(contId);
contId.layout?.addWidget(labelId);
contId.layout?.addWidget(inputIdService);

container.layout?.addWidget(contName);
contName.layout?.addWidget(labelName);
contName.layout?.addWidget(inputNameService);

container.layout?.addWidget(contDate);
contDate.layout?.addWidget(labelDate);
contDate.layout?.addWidget(inputDateService);

container.layout?.addWidget(contHours);
contHours.layout?.addWidget(labelHours);
contHours.layout?.addWidget(inputHours);

container.layout?.addWidget(contTypeTransport);
contTypeTransport.layout?.addWidget(labelTypeTransport);
contTypeTransport.layout?.addWidget(typeTransport);

container.layout?.addWidget(contNumPersons);
contNumPersons.layout?.addWidget(labelNumPersons);
contNumPersons.layout?.addWidget(inputNumPersons);

container.layout?.addWidget(contCant);
contCant.layout?.addWidget(labelCant);
contCant.layout?.addWidget(inputCant);

container.layout?.addWidget(contButton);
contButton.layout?.addWidget(saveAddService);
contButton.layout?.addWidget(backAddService);

container.layout?.addWidget(error1);
container.layout?.addWidget(error2);




container.setStyleSheet(`

    #container{
        height: '100%';
        width:'100%';
        align-items: 'center';
        justify-content: 'center';
    }

    #title{
        font-size: 24px;
        font-weight: bold;
        margin-bottom:20px;
    }

    #container-secondary{
        flex-direction:'row';
        width:'70%';
        padding:20px;
        justify-content:'space-between';
    }

    #label{
        font-weight:bold;
    }

    #input{
        width:'80%';
    }

    #container-button{
        flex-direction:'row';
        justify-content:'space-between';
        width:'70%';
    }

    #button{
        background-color:#FDD835;
        border-style:'none';
        padding:15px;
        border-radius:16px;
        width:'48%';
    }

    #button:hover{
        background-color:#FBC02D;
    }
`)

export default container;
export{
    backAddService,
    typeTransport,
    contNumPersons,
    contCant,
    saveAddService,
    inputIdService,
    inputNameService,
    inputDateService,
    inputHours,
    inputNumPersons,
    inputCant,
    error1,
    error2,
}



