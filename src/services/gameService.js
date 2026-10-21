import games from '../data/games.js';

export const getAllGames = () => {
  return games;
};

export const getGameById = (id) => {
  return games.find(game => game.id === parseInt(id));
};

export const getGamesByGenre = (genre) => {
  return games.filter(game => game.genre.toLowerCase() === genre.toLowerCase());
};