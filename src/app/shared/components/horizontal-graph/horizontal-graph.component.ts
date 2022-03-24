import { Component } from '@angular/core';

@Component({
  selector: 'app-horizontal-graph',
  templateUrl: './horizontal-graph.component.html',
  styleUrls: ['./horizontal-graph.component.scss']
})
export class HorizontalGraphComponent {

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

  constructor() {
    Object.assign(this, { single: this.result });
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

}
