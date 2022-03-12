import {QWidget, QLabel, FlexLayout, QPushButton, QTableWidget } from '@nodegui/nodegui';


const container = new QWidget();
container.setObjectName("main");
container.setLayout(new FlexLayout());

const title = new QLabel();
title.setObjectName("title");
title.setText("Listado de Conductores");

const table = new QTableWidget(0,2);
table.setObjectName("table")
table.setHorizontalHeaderLabels(['Id', 'Nombre']);
table.resizeRowsToContents();
const backList = new QPushButton();
backList.setText("Regresar");
backList.setObjectName("button");

container.layout?.addWidget(title);
container.layout?.addWidget(table);
container.layout?.addWidget(backList);

container.setStyleSheet(`

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

  #table{
    height:'60%';
    width:'50%';
  }

  #button{
    background-color:#FDD835;
    border-style:'none';
    padding:15px;
    border-radius:16px;
    width:'25%';
  }

  #button:hover{
    background-color:#FBC02D;
  }

`)

export default container;
export{
    backList,
    table
}
