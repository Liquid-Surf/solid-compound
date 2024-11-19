// src/models/db.ts
import sqlite3 from 'sqlite3';

export const db = new sqlite3.Database('./blog.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the blog database');
});

/**
 * posts
 * id:int:unique
 * title:text
 * content:text
 * author:text
 *
 * users
 * id:int:unique
 * username:text:unique
 * password:text
 */
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY, title TEXT, content TEXT, author TEXT)');
  db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT UNIQUE, password TEXT)');
});
