import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../shared/interfaces/game';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.scss']
})
export class GotyComponent implements OnInit {
  games: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getNominados();
  }

  // Recuperar el listado de jeugos registrados en la base de datos de Firestore
  getNominados() {
    this.gameService.getNominados().subscribe(games => {
      console.log(games);
      this.games = games;
    })
  }

  // Votar + 1 el juego seleccionado
  voteGame(id: string) {
    this.gameService.voteGame(id).subscribe(res => {
      if (res.status) {
        // Mostrar mensaje de suceso al usuario
        Swal.fire({
          title: 'Gracias',
          text: res.message,
          icon: 'success'
        })
      }
    });
  }

}
