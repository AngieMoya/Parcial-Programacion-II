import { QMainWindow, QWidget, QLabel, FlexLayout, QPushButton, QIcon, QFont, QTableWidget } from '@nodegui/nodegui';

const container = new QWidget();
container.setObjectName("main");
container.setLayout(new FlexLayout());

const title = new QLabel();
title.setObjectName("title");
title.setText("Nómina")

const filtrar = new QLabel();
filtrar.setText("Filtrar transportes");

const tableNomina = new QTableWidget(1,5);
tableNomina.setObjectName("table");
tableNomina.setHorizontalHeaderLabels(['Id', 'Nombre', 'Fecha','Salario básico','Salario total']);
tableNomina.resizeColumnsToContents();

const backNomina = new QPushButton();
backNomina.setText("Regresar");
backNomina.setObjectName("button");

container.layout?.addWidget(title);
container.layout?.addWidget(tableNomina);
container.layout?.addWidget(backNomina);

/*
    totalSalary: salary(
      typeTransport.currentText(),
      parseInt(inputHours.text(), 10),
      1550000,
      parseInt(inputCant.text(), 10)
    ),
    description:details(1550000,typeTransport.currentText(),parseInt(inputHours.text(), 10),parseInt(inputCant.text(), 10),parseInt(inputNumPersons.text(), 10)),
    
*/ 

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
    width:'90%';
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
    backNomina,
    tableNomina
}
