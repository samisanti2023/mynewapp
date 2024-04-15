import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series: Array<Serie> = [];

  constructor(private serieService: SerieService) { }

  getSerieList() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    });
  }
    // Función para calcular algo
    calcularAVGTemporadas(): number {
      // Aquí puedes realizar cualquier cálculo que necesites
      let series=this.series;
      let numerador:number=0;
      series.forEach((serie) => numerador = numerador + serie.seasons);
      let denom:number=series.length
      return numerador/denom;
    }
  ngOnInit() {
    this.getSerieList();
  }

}
