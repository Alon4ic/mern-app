import { Router } from 'express'
import { checkAuth } from '../utils/checkAuth.js';
import { createComment } from '../controllers/comments.js';


const router = new Router

// Create comment
//http://localhost:3001/api/comments/:id
router.post('/:id', checkAuth, createComment)

export default router;