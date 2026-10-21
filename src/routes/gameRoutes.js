import { Router } from 'express';
import { getGames, getGame, getGamesGenre, getGamesPlatform } from '../controllers/gameController.js';

const router = Router();

router.get('/', getGames);
router.get('/genre/:genre', getGamesGenre);
router.get('/platform/:platform', getGamesPlatform);
router.get('/:id', getGame);

export default router;