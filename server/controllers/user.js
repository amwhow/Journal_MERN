import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signIn = async (req, res) => { 
  const { email, password } = req.body;
  try {
      const existingUser = await User.findOne( { email });
      if (!existingUser) return res.status(404).json( { message: "Didn't find user."})
      
      const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
      if (!isPasswordCorrect) res.status(400).json( { message: "User credentials invalid"})

      // 'test' is a placeholder for secret message here
      const token = jwt.sign({ email: existingUser.email, id:existingUser._id}, 'test', { expiresIn: "1h"})

      res.status(200).json( { result: existingUser, token: token });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
} 

export const signUp = async (req, res) => { 
  const { email, password, firstName, lastName, confirmPassword } = req.body;
  try {
      const existingUser = await User.findOne( { email });
      if (existingUser) return res.status(404).json( { message: "User email existed, please use another email"})

      if (password === confirmPassword) return res.status(404).json( {message: "password doesn't match"})

      const hashedPassword = await bcrypt.hash(password, 12);

      const result = await User.create( { email, password:hashedPassword, name: `${firstName} ${lastName}`});
      
      const token = jwt.sign({ email: result.email, id:result._id}, 'test', { expiresIn: "1h"})

      res.status(200).json( { result, token });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
}