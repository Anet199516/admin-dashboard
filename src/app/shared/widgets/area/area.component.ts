import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';

import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  @Input() chartData: [];
  highcharts = Highcharts; // required
  chartOptions = {};

  constructor() { }

  ngOnInit(): void {
    this.chartOptions =  {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Historic and Estimated Worldwide Population Growth by Region'
      },
      tooltip: {
        split: true,
        valueSuffix: ' millions'
      },
      series: this.chartData
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 200);
  }

}
