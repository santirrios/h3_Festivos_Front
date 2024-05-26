import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css',
})
export class LayoutPageComponent {
  public sidenavItems = [
    { label: 'Validar por fecha', route: '/festivos/validar-por-fecha' },
    { label: 'Validar por año', route: '/festivos/validar-por-anho' },
  ];
}
