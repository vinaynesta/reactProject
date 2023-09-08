import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import Game from './index';

export let loader: LoaderFunction = async ({ request }) => {
  // You can load data here if needed
  const gameData = { title: 'Game Page', description: 'This is the game page.' };

  return json(gameData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default Game;


