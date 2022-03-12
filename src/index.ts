import {
  QMainWindow,
  QWidget,
  QLabel,
  FlexLayout,
  QPushButton,
  QTableWidgetItem,
} from "@nodegui/nodegui";
import centralConductores, {
  home,
  buttonAdd,
  buttonAddService,
  buttonList,
} from "./views/conductores";

import containerAddConductores, {
  backAdd,
  saveConductor,
  inputId,
  inputName,
} from "./views/conductores/agregar-conductor";

import containerAddService, {
  backAddService,
  typeTransport,
  contNumPersons,
  contCant,
  inputCant,
  saveAddService,
  inputIdService,
  inputNameService,
  inputDateService,
  inputHours,
  inputNumPersons,
  error1,
  error2,
} from "./views/conductores/agregar-servicio";

import contService, {
  tableService,
  backService,
  optionsSearch,
} from "./views/nomina/services";

import containerList, { backList, table } from "./views/conductores/listado";

import containerNomina, { backNomina, tableNomina } from "./views/nomina/index";

import salary, { details } from "./utils/salary";

const win = new QMainWindow();
win.setWindowTitle("Sistema de sueldos");

const centralWidget = new QWidget();
centralWidget.setObjectName("myroot");
const rootLayout = new FlexLayout();
centralWidget.setLayout(rootLayout);

const inicio = new QWidget();
inicio.setObjectName("myroot");
inicio.setLayout(new FlexLayout());

const label = new QLabel();
label.setObjectName("mylabel");
label.setText("INICIO");

const buttonConductor = new QPushButton();
buttonConductor.setObjectName("button-main");
buttonConductor.setText("Conductores");

const buttonNomina = new QPushButton();
buttonNomina.setObjectName("button-main");
buttonNomina.setText("Nómina");

const buttonService = new QPushButton();
buttonService.setObjectName("button-main");
buttonService.setText("Servicios");

rootLayout.addWidget(inicio);
inicio.layout?.addWidget(label);
inicio.layout?.addWidget(buttonConductor);
inicio.layout?.addWidget(buttonService);
inicio.layout?.addWidget(buttonNomina);
win.setCentralWidget(centralWidget);

type DriverType = {
  id: string;
  name: string;
};
type ServicesType = {
  id: string;
  name: string;
  date: string;
  hours: string;
  typeTransport: string;
  numberPersons: string;
  numberToneladas: string;
  generalDetails: string;
};

type NominaType = {
  id: string;
  name: string;
  date: string;
  salaryBasic: string;
  salary: string;
};

const drivers: DriverType[] = [];
const services: ServicesType[] = [];
let nomina: NominaType[] = [];

//boton ir a conductores//
buttonConductor.addEventListener("clicked", () => {
  centralWidget.layout?.removeWidget(inicio);
  inicio.close();
  centralWidget.update();
  centralConductores.show();
  centralWidget.layout?.addWidget(centralConductores);
});
//boton regresar inicio de conductores//
home.addEventListener("clicked", () => {
  centralWidget.layout?.removeWidget(centralConductores);
  centralConductores.close();
  centralWidget.update();
  inicio.show();
  centralWidget.layout?.addWidget(inicio);
});

//boton ir a nomina//
buttonNomina.addEventListener("clicked", () => {
  centralWidget.layout?.removeWidget(inicio);
  inicio.close();
  centralWidget.update();
  containerNomina.show();
  centralWidget.layout?.addWidget(containerNomina);
  const driversObj: { [key: string]: string[] } = {};
  tableNomina.clear();
  services.forEach((service) => {
    nomina.push({
      id: service.id,
      name: service.name,
      date: service.date,
      salaryBasic: "1550000",
      salary: String(
        salary(
          service.typeTransport,
          parseInt(service.hours, 10),
          parseInt(service.numberToneladas, 10)
        )
      ),
    });
  });
  console.log(nomina);
  nomina.forEach((e) => {
    if (driversObj[e.id]) {
      driversObj[e.id].push(e.salary);
    } else {
      driversObj[e.id] = [e.salary];
    }
  });
  console.log(driversObj);
  nomina = [];
  services.forEach((service) => {
    if (nomina.find((n) => n.id === service.id) === undefined) {
      nomina.push({
        id: service.id,
        name: service.name,
        date: service.date,
        salaryBasic: "1550000",
        salary: String(
          driversObj[service.id].reduce(
            (acc, current) => acc + Number(current),
            0
          ) + 1550000
        ),
      });
    }
  });
  console.log("Nomina", nomina);
  nomina.forEach((n, row) => {
    tableNomina.insertRow(row);
    const item1 = new QTableWidgetItem(`${n.id}`);
    const item2 = new QTableWidgetItem(`${n.name}`);
    const item3 = new QTableWidgetItem(`${n.date}`);
    const item4 = new QTableWidgetItem(`${n.salaryBasic}`);
    const item5 = new QTableWidgetItem(`${n.salary}`);

    tableNomina.setItem(row, 0, item1);
    tableNomina.setItem(row, 1, item2);
    tableNomina.setItem(row, 2, item3);
    tableNomina.setItem(row, 3, item4);
    tableNomina.setItem(row, 4, item5);
  })
});

//regresar de nomina a inicio//
backNomina.addEventListener("clicked", () => {
  centralWidget.layout?.removeWidget(containerNomina);
  containerNomina.close();
  centralWidget.update();
  inicio.show();
  centralWidget.layout?.addWidget(inicio);
});

//funciones conductores//
//boton agregar conductor//
buttonAdd.addEventListener("clicked", () => {
  centralWidget.layout?.removeWidget(centralConductores);
  centralConductores.close();
  centralWidget.update();
  containerAddConductores.show();
  centralWidget.layout?.addWidget(containerAddConductores);
});
//boton regresar a conductor//
backAdd.addEventListener("clicked", () => {
  centralWidget.layout?.removeWidget(containerAddConductores);
  containerAddConductores.close();
  centralWidget.update();
  centralConductores.show();
  centralWidget.layout?.addWidget(centralConductores);
});
//BOTON AGREGAR SERVICIO//
buttonAddService.addEventListener("clicked", () => {
  centralWidget.layout?.removeWidget(centralConductores);
  centralConductores.close();
  centralWidget.update();
  containerAddService.show();
  centralWidget.layout?.addWidget(containerAddService);
});
//boton regresar a conductor//
backAddService.addEventListener("clicked", () => {
  error1.hide();
  error2.hide();
  centralWidget.layout?.removeWidget(containerAddService);
  containerAddService.close();
  centralWidget.update();
  centralConductores.show();
  centralWidget.layout?.addWidget(centralConductores);
});
// validacion para ingresar numero de pasajeros en caso de que se selecione colectivo//
typeTransport.addEventListener("currentTextChanged", () => {
  const value = "Colectivo";
  if (typeTransport.currentText() === value) {
    contNumPersons.show();
    containerAddService.update();
  } else {
    contNumPersons.hide();
    containerAddService.update();
  }
});
//validacion de mercacia cantidad de toneladas//
typeTransport.addEventListener("currentTextChanged", () => {
  const value1 = "Mercancía";
  const value2 = "Mercancía peligrosa";
  if (
    typeTransport.currentText() === value1 ||
    typeTransport.currentText() === value2
  ) {
    contCant.show();
    containerAddService.update();
  } else {
    //containerAddService.layout?.removeWidget(contCant);
    contCant.hide();
    containerAddService.update();
  }
});
//boton de conductor a listado//
buttonList.addEventListener("clicked", () => {
  centralWidget.layout?.removeWidget(centralConductores);
  centralConductores.close();
  centralWidget.update();
  containerList.show();
  centralWidget.layout?.addWidget(containerList);
  // agregar drivers a listado tabla//
  let row = 0;
  table.setRowCount(row);
  table.setHorizontalHeaderLabels(["Id", "Nombre"]);
  drivers.forEach((driver) => {
    table.insertRow(row);
    const item1 = new QTableWidgetItem(`${driver.id}`);
    const item2 = new QTableWidgetItem(`${driver.name}`);
    table.setItem(row, 0, item1);
    table.setItem(row, 1, item2);
    row += 1;
  });
});
//boton regresar de listado a conductor//
backList.addEventListener("clicked", () => {
  centralWidget.layout?.removeWidget(containerList);
  containerList.close();
  centralWidget.update();
  centralConductores.show();
  centralWidget.layout?.addWidget(centralConductores);
});

//boton ir a service// rellenar tabla servicios
buttonService.addEventListener("clicked", () => {
  centralWidget.layout?.removeWidget(inicio);
  inicio.close();
  centralWidget.update();
  contService.show();
  centralWidget.layout?.addWidget(contService);
  //llenar datos servicios//
  tableService.clear();
  let row = 0;
  tableService.setRowCount(row);
  tableService.setHorizontalHeaderLabels([
    "Id",
    "Nombre",
    "Fecha",
    "Horas laboradas",
    "Tipo de transporte",
    "Número de pasajeros",
    "Cantidad de toneladas",
    "Detalles",
  ]);
  services.forEach((service) => {
    tableService.insertRow(row);
    const item1 = new QTableWidgetItem(`${service.id}`);
    const item2 = new QTableWidgetItem(`${service.name}`);
    const item3 = new QTableWidgetItem(`${service.date}`);
    const item4 = new QTableWidgetItem(`${service.hours}`);
    const item5 = new QTableWidgetItem(`${service.typeTransport}`);
    const item6 = new QTableWidgetItem(`${service.numberPersons}`);
    const item7 = new QTableWidgetItem(`${service.numberToneladas}`);
    const item8 = new QTableWidgetItem(`${service.generalDetails}`);

    tableService.setItem(row, 0, item1);
    tableService.setItem(row, 1, item2);
    tableService.setItem(row, 2, item3);
    tableService.setItem(row, 3, item4);
    tableService.setItem(row, 4, item5);
    tableService.setItem(row, 5, item6);
    tableService.setItem(row, 6, item7);
    tableService.setItem(row, 7, item8);
    row += 1;
  });
});

//boton regresar a inicio de service//
backService.addEventListener("clicked", () => {
  centralWidget.layout?.removeWidget(contService);
  contService.close();
  centralWidget.update();
  inicio.show();
  centralWidget.layout?.addWidget(inicio);
});
//guardar conductor//
saveConductor.addEventListener("clicked", () => {
  const newDriver = {
    id: inputId.text(),
    name: inputName.text(),
  };
  drivers.push(newDriver);
  inputId.clear();
  inputName.clear();
  console.log(drivers);
});
//guardar servicio//
saveAddService.addEventListener("clicked", () => {
  error1.hide();
  error2.hide();
  if (
    !inputIdService.text().trim() ||
    !inputNameService.text().trim() ||
    !inputHours.text().trim()
  ) {
    error2.hide();
    error1.show();
    containerAddService.update();
    inputIdService.clear();
    inputNameService.clear();
    inputHours.clear();
    inputNumPersons.clear();
    inputCant.clear();
    return;
  }

  const isDriverFound = drivers.find((d) => d.id === inputIdService.text());

  if (!isDriverFound) {
    error1.hide();
    error2.show();
    containerAddService.update();
    inputIdService.clear();
    inputNameService.clear();
    inputHours.clear();
    inputNumPersons.clear();
    inputCant.clear();
    return;
  }

  const newService = {
    id: inputIdService.text(),
    name: inputNameService.text(),
    date: inputDateService.text(),
    hours: inputHours.text(),
    typeTransport: typeTransport.currentText(),
    numberPersons: inputNumPersons.text(),
    numberToneladas: inputCant.text(),
    generalDetails: details(
      1550000,
      typeTransport.currentText(),
      parseInt(inputHours.text(), 10),
      parseInt(inputCant.text(), 10),
      parseInt(inputNumPersons.text(), 10)
    ),
  };
  services.push(newService);
  inputIdService.clear();
  inputNameService.clear();
  inputHours.clear();
  inputNumPersons.clear();
  inputCant.clear();
  console.log(services);
});
//buscar transportes peligrosos//
optionsSearch.addEventListener("currentTextChanged", (filterSelected) => {
  const servicios = "Servicios";
  tableService.clearContents();
  if (optionsSearch.currentText() !== servicios) {
    services
      .filter((e) => e.typeTransport === filterSelected)
      .forEach((e, index) => {
        console.log(e);
        const item1 = new QTableWidgetItem(`${e.id}`);
        const item2 = new QTableWidgetItem(`${e.name}`);
        const item3 = new QTableWidgetItem(`${e.date}`);
        const item4 = new QTableWidgetItem(`${e.hours}`);
        const item5 = new QTableWidgetItem(`${e.typeTransport}`);
        const item6 = new QTableWidgetItem(`${e.numberPersons}`);
        const item7 = new QTableWidgetItem(`${e.numberToneladas}`);

        tableService.setItem(index, 0, item1);
        tableService.setItem(index, 1, item2);
        tableService.setItem(index, 2, item3);
        tableService.setItem(index, 3, item4);
        tableService.setItem(index, 4, item5);
        tableService.setItem(index, 5, item6);
        tableService.setItem(index, 6, item7);
      });
  } else {
    services.forEach((e, index) => {
      const item1 = new QTableWidgetItem(`${e.id}`);
      const item2 = new QTableWidgetItem(`${e.name}`);
      const item3 = new QTableWidgetItem(`${e.date}`);
      const item4 = new QTableWidgetItem(`${e.hours}`);
      const item5 = new QTableWidgetItem(`${e.typeTransport}`);
      const item6 = new QTableWidgetItem(`${e.numberPersons}`);
      const item7 = new QTableWidgetItem(`${e.numberToneladas}`);

      tableService.setItem(index, 0, item1);
      tableService.setItem(index, 1, item2);
      tableService.setItem(index, 2, item3);
      tableService.setItem(index, 3, item4);
      tableService.setItem(index, 4, item5);
      tableService.setItem(index, 5, item6);
      tableService.setItem(index, 6, item7);
    });
  }
});

win.setStyleSheet(
  `
    #myroot {
      height: '100%';
      width:'100%';
      align-items: 'center';
      justify-content: 'center';
    }
    #mylabel {
      font-size: 24px;
      font-weight: bold;
      margin-bottom:20px;
    }

    #button-main{
      background-color:#FDD835;
      border-style:'none';
      padding:15px;
      border-radius:16px;
      width:'25%';
    }

    #button-main:hover{
      background-color:#FBC02D;
    }
  `
);
win.show();

(global as any).win = win;
