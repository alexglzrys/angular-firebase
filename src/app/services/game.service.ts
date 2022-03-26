import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../shared/interfaces/game';

const API_URL = environment.api;

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  getNominados(): Observable<Game[]> {
    const URL = `${API_URL}/goty`;
    return this.http.get<Game[]>(URL);
  }
}
