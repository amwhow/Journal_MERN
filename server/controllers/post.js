import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose';

export const getPosts = async (req, res) => { 
  try {
      const postMessages = await PostMessage.find();    
      res.status(200).json(postMessages);
  } catch (error) {
      res.status(404).json({ message: error.message });
  }
}

export const newPost = async (req, res) => {
  const { title, message, selectedFile, author, tags } = req.body;

  const newPost = new PostMessage({ title, message, selectedFile, author, tags })
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json( { message: error.message });
  }
}

export const updatePost = async (req, res) => {
  // id: _id will rename the extracted data(id) to _id
  const { id: _id } = req.params;
  const { author, title, message, tags, selectedFile } = req.body;

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post found with that id");

  const updatedPost = { author, title, message, tags, selectedFile, _id };
  
  await PostMessage.findByIdAndUpdate(_id, updatedPost, { new: true });

  res.json(updatedPost);
}

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post found with that id");
  
  await PostMessage.findByIdAndRemove(_id);

  res.json( { message: 'Post deleted!' })
}


export const likePost = async (req, res) => {
  const { id: _id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post found with that id");
  
  const post = await PostMessage.findById(_id);

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, { likeCount : post.likeCount + 1 }, { new: true })

  res.json(updatedPost)
}

