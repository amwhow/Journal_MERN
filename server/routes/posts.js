import express from 'express';

import { getPosts, newPost, updatePost, deletePost, likePost } from '../controllers/post.js';
const router = express.Router();
// call the getPosts functions on a get request to the homepage
router.get('/', getPosts);
router.post('/', newPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router