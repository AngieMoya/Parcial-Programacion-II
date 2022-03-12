function salary(transport: string, hours: number, toneladas:number):number {
    const person = 3500;
    const colective = 2500;
    const commodity = 7000;
    const dangerusCommodity = 7000;
    let totalSalary;
    if (transport === "Personas") {
      totalSalary = (hours * 15000) + (hours * person);
  
    } else if (transport === "Colectivo") {
      totalSalary = (hours * 15000) + (hours * colective);
  
    } else if (transport === "Mercancía") {
      totalSalary = (hours * 15000) + (commodity * toneladas);
  
    } else {
      totalSalary = (hours * 15000) + (dangerusCommodity * toneladas)+ 150000;
    }
    
    return totalSalary;
  }

function details(basic:number, typeTransport:string, hoursDriver:number, countToneladas:number, numRider:number){
    if (typeTransport === "Personas") {
        return `El sueldo básico es $ ${basic}
        Tipo de transporte ${typeTransport} $3500 adicional por hora
        Horas laboradas ${hoursDriver} cada hora por una valor de $15000`
    
      } else if (typeTransport === "Colectivo") {
        return `El sueldo básico es $ ${basic}
        Tipo de transporte ${typeTransport} $2500 adicional por hora
        Horas laboradas ${hoursDriver} cada hora por una valor de $15000
        Número de pasajeros transportados ${numRider}`
    
      } else if (typeTransport === "Mercancía") {
        return `El sueldo básico es $ ${basic}
        Tipo de transporte ${typeTransport} $7000 adicional por hora
        Horas laboradas ${hoursDriver} cada hora por una valor de $15000
        Cantidad de toneladas transportadas ${countToneladas}`
        
      } else {
        return `El sueldo básico es $ ${basic}
        Tipo de transporte ${typeTransport} $7000 adicional por hora
        Horas laboradas ${hoursDriver} cada hora por una valor de $15000
        Cantidad de toneladas transportadas ${countToneladas} 
        Adicional $150.000 por transporte`
      }
}
export default salary;
export{details}