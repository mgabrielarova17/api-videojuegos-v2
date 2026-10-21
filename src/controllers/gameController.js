import * as gameService from '../services/gameService.js';

export const getGames = (req, res) => {
  res.json({ success: true, data: gameService.getAllGames() });
};

export const getGame = (req, res) => {
  const game = gameService.getGameById(req.params.id);
  if (!game) return res.status(404).json({ success: false, message: 'Juego no encontrado' });
  res.json({ success: true, data: game });
};

export const getGamesGenre = (req, res) => {
  const games = gameService.getGamesByGenre(req.params.genre);
  if (games.length === 0) return res.status(404).json({ success: false, message: 'No se encontraron juegos de ese género' });
  res.json({ success: true, data: games });
};

// Nuevo controlador para plataforma
export const getGamesPlatform = (req, res) => {
  const games = gameService.getGamesByPlatform(req.params.platform);
  if (games.length === 0) return res.status(404).json({ success: false, message: 'No se encontraron juegos en esa plataforma' });
  res.json({ success: true, data: games });
};