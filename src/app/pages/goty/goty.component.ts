import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../shared/interfaces/game';

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

  getNominados() {
    this.gameService.getNominados().subscribe(games => {
      console.log(games);
      this.games = games;
    })
  }

}
