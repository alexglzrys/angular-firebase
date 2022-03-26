import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import { Game } from '../shared/interfaces/game';

const API_URL = environment.api;

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private games: Game[] = [];

  constructor(private http: HttpClient) { }

  getNominados(): Observable<Game[]> {
    if (this.games.length > 0) {
      // Retornar un observable con los juegos almacenados en la propiedad privada games
      console.log('Games desde Caché')
      return of(this.games);
    } else {
      // Hacer petición http y como tarea secundaria almacenar el resultado en la propiedad privada games (Caché)
      const URL = `${API_URL}/goty`;
      console.log('Games desde HTTPS')
      return this.http.get<Game[]>(URL).pipe(
        tap(games => this.games = games)
      );
    }
  }
}
