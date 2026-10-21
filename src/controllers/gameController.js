import * as gameService from '../services/gameService.js';

export const getGames = (req, res) => {
  const games = gameService.getAllGames();
  res.json({ success: true, data: games });
};

export const getGame = (req, res) => {
  const { id } = req.params;
  const game = gameService.getGameById(id);
  
  if (!game) {
    return res.status(404).json({ success: false, message: 'Juego no encontrado' });
  }
  
  res.json({ success: true, data: game });
};

export const getGamesGenre = (req, res) => {
  const { genre } = req.params;
  const games = gameService.getGamesByGenre(genre);
  
  if (games.length === 0) {
    return res.status(404).json({ success: false, message: 'No se encontraron juegos de ese género' });
  }
  
  res.json({ success: true, data: games });
};