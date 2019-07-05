import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  // Esto quiere decir que el valor de heroe puede venir de afuera
  @Input() heroe: any = {};
  @Input() idx: number;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {
  }

  /**
   * Redireccionar a detalle del heroe
   * @param idx
   */
  verHeroe(){
    this.router.navigate( ['/heroe', this.idx] );
    // this.heroeSeleccionado.emit( this.idx );
  }

}
