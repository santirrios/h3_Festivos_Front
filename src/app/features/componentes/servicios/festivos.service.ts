import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Festivo } from '../../../core/entidades/festivo.model';
import { environment } from '../../../../environments/environment';


@Injectable({ providedIn: 'root' })
export class FestivosService {
  private baseUrl: string = environment.urlBase;

  constructor(private httpClient: HttpClient) { }

  getFestivosPorAnho(anho: number): Observable<Festivo[]> {
    return this.httpClient.get<Festivo[]>(
      `${this.baseUrl}/api/festivo/ObtenerFestivosNano/${anho}`
    );
  }

  getFestivosPorFecha(
    anho: number,
    mes: number,
    dia: number
  ): Observable<string> {
    return this.httpClient.get<string>(
      `${this.baseUrl}/api/festivo/verificar/${anho}/${mes}/${dia}`
    );
  }
}
