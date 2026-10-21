import games from '../data/games.js';

export const getAllGames = () => games;

export const getGameById = (id) => games.find(game => game.id === parseInt(id));

export const getGamesByGenre = (genre) => games.filter(game => game.genre.toLowerCase() === genre.toLowerCase());

export const getGamesByPlatform = (platform) => games.filter(game => game.platform.toLowerCase() === platform.toLowerCase());

// Nueva función para CREAR un juego
export const createGame = (gameData) => {
  const newGame = {
    id: games.length + 1, // Genera un ID automático
    ...gameData
  };
  games.push(newGame); // Lo guarda en nuestro arreglo
  return newGame;
};