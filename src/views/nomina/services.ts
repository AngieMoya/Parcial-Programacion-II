import { QWidget, QLabel, FlexLayout, QPushButton, QTableWidget, QComboBox } from '@nodegui/nodegui';

const container = new QWidget();
container.setObjectName("main");
container.setLayout(new FlexLayout());

const title = new QLabel();
title.setObjectName("title");
title.setText("Servicios")

const contSearch = new QWidget();
contSearch.setObjectName("container-secondary");
contSearch.setLayout(new FlexLayout());

const search = new QLabel();
search.setText("Buscar por ")
search.setObjectName("label");

const optionsSearch = new QComboBox();
optionsSearch.addItem(undefined, "Servicios");
optionsSearch.addItem(undefined, "Mercancía peligrosa");
optionsSearch.addItem(undefined, "Colectivo");


const tableService = new QTableWidget(1,8);
tableService.setObjectName("table");
tableService.setHorizontalHeaderLabels(['Id', 'Nombre', 'Fecha', 'Horas laboradas', 'Tipo de transporte', 'Número de pasajeros','Cantidad de toneladas',"Detalles"]);
tableService.resizeColumnsToContents();

const backService = new QPushButton();
backService.setText("Regresar");
backService.setObjectName("button");


container.layout?.addWidget(title);
container.layout?.addWidget(contSearch);
contSearch.layout?.addWidget(search);
contSearch.layout?.addWidget(optionsSearch);
container.layout?.addWidget(tableService);
container.layout?.addWidget(backService);

container.setStyleSheet(`

  #main {
    height: '100%';
    width:'100%';
    align-items: 'center';
    justify-content: 'center';
  }

  #container-secondary{
    flex-direction:'row';
    width:'50%';
    align-items: 'center';
    justify-content: 'space-between';
    margin-bottom:16px;
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
    tableService,
    backService,
    optionsSearch
}