import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from "rxjs/operators";
import { Game } from '../../shared/interfaces/game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  games: any[] = [];

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.fetchDataGames();
  }

  fetchDataGames() {
    // Recuperar el listado de juegos en la colección goty, y suscribirme a cualquier cambio
    // * Significa que toda esta logica también se dispara si hay cambios en la base de datos
    this.firestore.collection<Game>('goty').valueChanges().pipe(
      // Transformar la respuesta en una colección de datos que pueda interpretar el gráfico de ngx-charts
      // actual { name, votes, id, url }
      // se requiere { name, values }
      // Mapeo la respuesta, que es un arreglo de guegos, mapeo ese arreglo, y retorno por cada elemento, un nuevo objeto con la data necesaria
      // finalmente obtengo como resultado de la suscripción esa data transformada
      map((games) => games.map(({ name, votes }) => ({name, value: votes})))
    ).subscribe(res => this.games = res);
  }

}
