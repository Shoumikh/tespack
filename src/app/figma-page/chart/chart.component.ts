/* app.component.ts */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent {
  // constructor() {}

  // ngOnInit(): void {}
  dps = [
    { x: 1, y: 10 },
    { x: 2, y: 13 },
    { x: 3, y: 18 },
    { x: 4, y: 20 },
    { x: 5, y: 17 },
    { x: 6, y: 10 },
    { x: 7, y: 13 },
    { x: 8, y: 18 },
    { x: 9, y: 20 },
    { x: 10, y: 17 },
  ];
  chart: any;

  chartOptions = {
    exportEnabled: true,
    title: {
      text: 'Bettary Life Cycle',
    },
    data: [
      {
        type: 'line',
        dataPoints: this.dps,
      },
    ],
  };
  getChartInstance(chart: object) {
    this.chart = chart;
    // setTimeout(this.updateChart, 1000); //Chart updated every 1 second
  }
  updateChart = () => {
    var yVal =
      this.dps[this.dps.length - 1].y +
      Math.round(5 + Math.random() * (-5 - 5));
    this.dps.push({ x: this.dps[this.dps.length - 1].x + 1, y: yVal });

    if (this.dps.length > 10) {
      this.dps.shift();
    }
    this.chart.render();
    setTimeout(this.updateChart, 1000); //Chart updated every 1 second
  };
}
