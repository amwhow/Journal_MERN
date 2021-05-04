import express from 'express';

import { getPosts, newPost, updatePost, deletePost, likePost } from '../controllers/post.js';
import auth from '../middleware/auth.js';

const router = express.Router();
// call the getPosts functions on a get request to the homepage
router.get('/', getPosts);
router.post('/', auth, newPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);
router.patch('/:id/likePost', auth, likePost);

export default router