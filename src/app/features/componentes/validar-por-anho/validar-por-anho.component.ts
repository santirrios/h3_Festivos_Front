import { Component } from '@angular/core';
import { Festivo } from '../../../core/entidades/festivo.model';
import { ColumnMode, NgxDatatableModule, SelectionType } from '@swimlane/ngx-datatable';
import { FestivosService } from '../servicios/festivos.service';
import { CommonModule } from '@angular/common';
import { ReferenciasMaterialModule } from '../../../shared/modulos/referencias-material.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-validar-por-anho',
  templateUrl: './validar-por-anho.component.html',
  styleUrl: './validar-por-anho.component.css',
  standalone: true,
  imports: [
    CommonModule,
    ReferenciasMaterialModule,
    FormsModule,
    NgxDatatableModule,
  ],
})
export class ValidarPorAnhoComponent {
  public textoBusqueda: string = "";
  public festivos: Festivo[] = [];
  public columnas = [
    { name: "Nombre", prop: "nombre" },
    { name: "Dia", prop: "dia" },
    { name: "Mes", prop: "mes" }
  ];
  public modoColumna = ColumnMode;
  public tipoSeleccion = SelectionType;
  mensaje: string = '';
  mostrarDiv: boolean = false;

  year:number = 2024;


  constructor(private festivosService: FestivosService) { }

  validarFestivo() {
    this.festivosService.getFestivosPorAnho(this.year)
      .subscribe({
        next: (festivos) => {
          this.festivos = festivos;
          this.mensaje = '';
          this.mostrarDiv = true;
        },
        error: (response) => {
          this.mensaje = response.error;
          console.error('Somthing went wrong:', response);
          this.mostrarDiv = false;
        }
      });
  }
}
