export type playerType = {
  id: number;
  name: string;
};

export type playerMoveType = {
  id: number;
  position: number;
  user_id: number;
};

export type winnerType = 'x' | 'o' | 'draw';
