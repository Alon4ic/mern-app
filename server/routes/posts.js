import { Router } from 'express';
import { checkAuth } from '../utils/checkAuth.js';
import { createPost, getAll } from '../controllers/posts.js';

const router = new Router();

//Create post
//http://localhost:3001/api/posts
router.post('/', checkAuth, createPost)

// Get All Posts
//http://localhost:3001/api/posts
router.get('/', getAll)

export default router;
