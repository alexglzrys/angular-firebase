import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HorizontalGraphComponent } from './components/horizontal-graph/horizontal-graph.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    HorizontalGraphComponent
  ],
  imports: [
    CommonModule,
    RouterModule    // Los componentes gestionados por este modulo harán uso de routerLink y routerLinkActive
  ],
  exports: [NavbarComponent, HorizontalGraphComponent]
})
export class SharedModule { }
