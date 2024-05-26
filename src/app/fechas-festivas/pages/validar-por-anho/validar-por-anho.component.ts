import { Component } from '@angular/core';
import { FestivoPorAnho } from '../../interfaces/festivo-anho.interface';
import { FestivosService } from '../../services/festivos.service';

@Component({
  selector: 'app-validar-por-anho',
  templateUrl: './validar-por-anho.component.html',
  styleUrl: './validar-por-anho.component.css',
})
export class ValidarPorAnhoComponent {
  public festivos: FestivoPorAnho[] = [];

  date: any;

  mostrarDiv: boolean = false;
  mensaje:string = '';

  constructor(private festivosService: FestivosService) {}

  validarFestivo() {
    console.log('validarFestivo');
    let dateObject = new Date(this.date); // Asegúrate de que this.date es una fecha válida
    let year = dateObject.getFullYear();
    console.log(year, this.date);
    
    if (!year || !this.date) {
      this.mensaje = 'Fecha no válida';
      this.mostrarDiv = false;
      return;
    }


    console.log(year);
    

    this.festivosService.getFestivosPorAnho(year)
    .subscribe({
      next: (festivos) => {
        this.festivos = festivos;
        this.mensaje = '';
        this.mostrarDiv = true;
      },
      error: (response) => {
        this.mensaje = response.error;
        console.error('There was an error!', response);
        this.mostrarDiv = false;
      }
    });
  }
}
