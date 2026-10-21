import games from '../data/games.js';

export const getAllGames = () => games;

export const getGameById = (id) => games.find(game => game.id === parseInt(id));

export const getGamesByGenre = (genre) => games.filter(game => game.genre.toLowerCase() === genre.toLowerCase());

// Nueva función para buscar por plataforma
export const getGamesByPlatform = (platform) => {
  return games.filter(game => game.platform.toLowerCase() === platform.toLowerCase());
};