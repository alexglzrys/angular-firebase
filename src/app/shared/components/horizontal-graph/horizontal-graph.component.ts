import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-horizontal-graph',
  templateUrl: './horizontal-graph.component.html',
  styleUrls: ['./horizontal-graph.component.scss']
})
export class HorizontalGraphComponent implements OnDestroy {

  result: any[] = [
    {
      "name": "Juego 1",
      "value": 100
    },
    {
      "name": "Juego 2",
      "value": 45
    },
    {
      "name": "Juego 3",
      "value": 79
    },
    {
      "name": "Juego 4",
      "value": 22
    },
    {
      "name": "Juego 5",
      "value": 41
    }
  ];
  //view: [number, number] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Juegos disponibles';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Votos';

  /*colorScheme: Color =  {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA'], selectable: true, group: ScaleType.Ordinal, name: 'Cistom Usage'
  };*/
  colorScheme = 'nightLights'
  interval!: any;

  constructor() {
    //Object.assign(this, { single: this.result });

    // Actualizar el gráfico cada segundo y medio
    this.interval = setInterval(() => {
      this.updateGraphic();
      console.log('chart update')
    }, 1500)
  }
  ngOnDestroy(): void {
    // Limpiar el intervalo para evitar fugas de memoria
    clearInterval(this.interval);
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  updateGraphic() {
    // ! ngx-charts dice que para poder actualizar los valores del gráfico, es necesario especificar todo el arreglo con los nuevos valores
    const newData = [...this.result];
    // Asignar un valor aleatorio a cada objeto en el arreglo
    for(let i in newData) {
      newData[i].value = Math.round(Math.random() * 100);
    }
    // Pasar los nuevos valores al arreglo original
    this.result = [...newData];
  }

}
