import { Router } from 'express';
import { getGames, getGame, getGamesGenre, getGamesPlatform, addGame } from '../controllers/gameController.js';

const router = Router();

router.get('/', getGames);
router.get('/genre/:genre', getGamesGenre);
router.get('/platform/:platform', getGamesPlatform);
router.get('/:id', getGame);
router.post('/', addGame); // Nueva ruta POST

export default router;