import {QWidget, QLabel, FlexLayout, QPushButton } from '@nodegui/nodegui';

const centralConductores = new QWidget();
centralConductores.setObjectName("main");
centralConductores.setLayout(new FlexLayout());

const title = new QLabel();
title.setText("Conductores");
title.setObjectName("title");

const buttonAdd = new QPushButton();
buttonAdd.setObjectName("button-conductores");
buttonAdd.setText("Agregar conductor");

const buttonAddService = new QPushButton();
buttonAddService.setObjectName("button-conductores");
buttonAddService.setText("Agregar servicio");

const buttonList = new QPushButton();
buttonList.setObjectName("button-conductores");
buttonList.setText("Listado conductores");

const home = new QPushButton();
home.setObjectName("button-conductores");
home.setText("Ir a inicio");

centralConductores.layout?.addWidget(title);
centralConductores.layout?.addWidget(buttonAdd);
centralConductores.layout?.addWidget(buttonAddService);
centralConductores.layout?.addWidget(buttonList);
centralConductores.layout?.addWidget(home);


centralConductores.setStyleSheet(
    `
      #main {
        height: '100%';
        width:'100%';
        align-items: 'center';
        justify-content: 'center';
      }
      #title {
        font-size: 24px;
        font-weight: bold;
        margin-bottom:20px;
      }
  
      #button-conductores{
        background-color:#FDD835;
        border-style:'none';
        padding:15px;
        border-radius:16px;
        width:'25%';
      }
  
      #button-conductores:hover{
        background-color:#FBC02D;
      }
    `
  );

export default centralConductores;
export{
    home,
    buttonAdd,
    buttonAddService,
    buttonList
}
