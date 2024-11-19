// src/controllers/postController.ts
import { Request, Response } from 'express';
import { db } from './db';

export const getAllPosts = (req: Request, res: Response) => {
  db.all('SELECT * FROM posts', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
};

export const getPostById = (req: Request, res: Response) => {
  const id = req.params.id;
  db.get('SELECT * FROM posts WHERE id = ?', [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (!row) {
      res.status(404).json({ error: 'Post not found' });
      return;
    }
    res.json(row);
  });
};

export const createPost = (req: Request, res: Response) => {
  const { title, content, author } = req.body;
  if (!title || !content || !author) {
    res.status(400).json({ error: 'Title, content, and author are required' });
    return;
  }
  db.run('INSERT INTO posts (title, content, author) VALUES (?, ?, ?)', [title, content, author], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID, title, content, author });
  });
};

export const updatePost = (req: Request, res: Response) => {
  const id = req.params.id;
  const { title, content, author } = req.body;
  if (!title || !content || !author) {
    res.status(400).json({ error: 'Title, content, and author are required' });
    return;
  }
  db.run('UPDATE posts SET title = ?, content = ?, author = ? WHERE id = ?', [title, content, author, id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (this.changes === 0) {
      res.status(404).json({ error: 'Post not found' });
      return;
    }
    res.json({ id: id, title, content, author });
  });
};

export const deletePost = (req: Request, res: Response) => {
  const id = req.params.id;
  db.run('DELETE FROM posts WHERE id = ?', [id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (this.changes === 0) {
      res.status(404).json({ error: 'Post not found' });
      return;
    }
    res.json({ message: 'Post deleted successfully' });
  });
};
