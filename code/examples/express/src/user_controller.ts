import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { db } from './db';

interface User {
  id: number;
  username: string;
  password: string;
}

const saltRounds = 10;

export const registerUser = (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ error: 'Username and password are required' });
    return;
  }
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      res.status(500).json({ error: 'Error hashing password' });
      return;
    }
    db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, hash], function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ message: 'User registered successfully', userId: this.lastID });
    });
  });
};

export const loginUser = (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400).json({ error: 'Username and password are required' });
    return;
  }
  db.get('SELECT * FROM users WHERE username = ?', [username], (err, row: User) => {
    console.log(row)
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (!row) {
      res.status(401).json({ error: 'Invalid username or password' });
      return;
    }
    bcrypt.compare(password, row.password, (err, result) => {
      if (err) {
        console.log(err)
        res.status(500).json({ error: 'Error comparing passwords' });
        return;
      }
      if (!result) {
        console.log('invalid')
        res.status(401).json({ error: 'Invalid username or password' });
        return;
      }
      console.log('session')
      req.session.user = row;
      res.redirect('/')
    });
  });

};

export const logoutUser = (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).json({ error: 'Error logging out' });
      return;
    }
    res.json({ message: 'Logout successful' });
  });
};
