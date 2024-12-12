import { Router } from 'express';
import { create, researchId, researchAll, update, deleted } from '../controllers/livroController';

const router = Router();

router.post('/', create);
router.get('/:id', researchId);
router.get('/', researchAll);
router.put('/:id', update);
router.delete('/:id', deleted);

export default router;
