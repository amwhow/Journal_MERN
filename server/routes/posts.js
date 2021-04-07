import express from 'express';

import { getPosts, newPost } from '../controllers/post.js';
const router = express.Router();
// call the getPosts functions on a get request to the homepage
router.get('/', getPosts);
router.post('/', newPost)
// router.get('/search/:id', searchOnePost);

export default router