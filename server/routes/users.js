import express from 'express';

import {  } from '../controllers/user.js';
const router = express.Router();
// call the getPosts functions on a get request to the homepage
router.post('/signin', signIn);
router.post('/signup', signUp);

export default router