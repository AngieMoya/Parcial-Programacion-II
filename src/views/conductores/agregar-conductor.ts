import {QWidget, QLabel, FlexLayout, QPushButton, QLineEdit } from '@nodegui/nodegui';

const container = new QWidget();
container.setObjectName("container");
container.setLayout(new FlexLayout());

const title = new QLabel();
title.setObjectName("title");
title.setText("Agregar conductor");

//formulario//
//...ID//

const contId = new QWidget();
contId.setObjectName("container-secondary")
contId.setLayout(new FlexLayout());

const labelId = new QLabel();
labelId.setText("Id");
labelId.setObjectName("label");

const inputId = new QLineEdit();
inputId.setObjectName("input");
inputId.addEventListener('textChanged', (text) => {
  const sanitizedText = text.replace(/\D/g,"")
  if(!!sanitizedText.length) inputId.setText(sanitizedText);
  else inputId.clear()
})

//...fin ID//
//...NAME//

const contName = new QWidget();
contName.setObjectName("container-secondary")
contName.setLayout(new FlexLayout());

const labelName = new QLabel();
labelName.setText("Nombre");
labelName.setObjectName("label");

const inputName = new QLineEdit();
inputName.setObjectName("input");
//...FIN NAME//

const contButton = new QWidget();
contButton.setObjectName("container-button");
contButton.setLayout(new FlexLayout());

const saveConductor = new QPushButton();
saveConductor.setObjectName("button");
saveConductor.setText("Guardar");

const backAdd= new QPushButton();
backAdd.setObjectName("button");
backAdd.setText("Regresar");

// fin formulario//

container.layout?.addWidget(title);
container.layout?.addWidget(contId);
contId.layout?.addWidget(labelId);
contId.layout?.addWidget(inputId);
container.layout?.addWidget(contName);
contName.layout?.addWidget(labelName);
contName.layout?.addWidget(inputName);
container.layout?.addWidget(contButton);
contButton.layout?.addWidget(saveConductor);
contButton.layout?.addWidget(backAdd);


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
    backAdd,
    saveConductor,
    inputId,
    inputName,
}

