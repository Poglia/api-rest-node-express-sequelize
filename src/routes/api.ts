import { Router } from "express";
import * as ApiController from "../controllers/apiController";
import * as PhraseController from "../controllers/phraseController";
import * as BookController from "../controllers/bookController";

const router = Router();

router.get('/ping', ApiController.ping);
router.get('/random', ApiController.random);
router.get('/nome/:nome', ApiController.nome);

router.get('/frases', PhraseController.listPhrases);
router.get('/frases/:id', PhraseController.getPhrase);
router.post('/frases', PhraseController.createPhrase);
router.put('/frases/:id', PhraseController.updatePhrase);
router.delete('/frases/:id', PhraseController.deletePhrase);
router.get('/frases/aleatoria', PhraseController.randomPhrase);

router.get('/livros', BookController.listBooks);
router.get('/livros/:id', BookController.getBook);
router.post('/livros', BookController.createBook);
router.put('/livros/:id', BookController.updateBook);
router.delete('/livros/:id', BookController.deleteBook);

export default router;