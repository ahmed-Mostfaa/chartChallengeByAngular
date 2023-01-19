import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, pie } from 'd3';
import { pipe } from 'rxjs';
import { data, dataMulti } from './data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data: any = data;
  view: any = [480, 200];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  colorScheme :any = {
    domain: ['#ec775f', '#ec775f', '#76b5bc']
  };

  onSelect(e: any) {
    console.log(e);
  }

  ngOnInit(): void {  }
}
