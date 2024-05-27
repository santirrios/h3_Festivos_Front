import { Component } from '@angular/core';
import { FestivosService } from '../../services/festivos.service';

@Component({
  selector: 'app-validar-por-fecha',
  templateUrl: './validar-por-fecha.component.html',
  styleUrl: './validar-por-fecha.component.css',
})
export class ValidarPorFechaComponent {
  date: any;

  public anho: number = 2020;

  public mes: number = 1;

  public dia: number = 1;

  mensajeFestivo: string = '';

  mostrarDiv: boolean = false;

  constructor(private festivosService: FestivosService) { }

  toggleDiv() {
    this.mostrarDiv = true;
  }

  validarFestivoPorFecha() {
    let dateObject = new Date(this.date);
    let year = dateObject.getFullYear();
    let month = dateObject.getMonth() + 1;
    let day = dateObject.getDate();

    if (!year || !month || !day) {
      this.mensajeFestivo = 'Fecha no válida';
      this.mostrarDiv = true;
      return;
    }


    this.festivosService
      .getFestivosPorFecha(year, month, day)
      .subscribe({
        next: (resp) => {
          if (resp) {
            this.mensajeFestivo = 'Es festivo!!';
          } else {
            this.mensajeFestivo = 'No es festivo :(';
          }
          this.mostrarDiv = true;
        },
        error: (response) => {
          this.mensajeFestivo = response.error;
          this.mostrarDiv = true;
          console.error('Something went wrong:', response);
        }
      });
  }
}
