export interface Game {
  id: string;
  name: string;
  url: string;
  votes: number
}

export interface VoteGameRequest {
  status: boolean;
  message: string;
}
