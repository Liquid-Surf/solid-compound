import express, { Request, Response } from 'express';
import path from 'path';
import session from 'express-session';
import { getAllPosts, getPostById, createPost, updatePost, deletePost } from './post_controller';
import { loginUser, logoutUser, registerUser } from './user_controller';

const app = express();
const PORT = process.env.PORT || 3000;

// Need to use Declaration merging
declare module 'express-session' {
  export interface SessionData {
    user: { [key: string]: any };
    error: string;
    success: string;
  }
}

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));

function restrict(req: Request, res: Response, next: Function) {
  if (req.session.user) {
    next();
  } else {
    req.session.error = 'Access denied!';
    res.redirect('/login');
  }
}

app.use((req, res, next) => {
  const err = req.session.error;
  const msg = req.session.success;
  delete req.session.error;
  delete req.session.success;
  res.locals.message = '';
  if (err) res.locals.message = '<p class="msg error">' + err + '</p>';
  if (msg) res.locals.message = '<p class="msg success">' + msg + '</p>';
  next();
});

app.get('/', (req, res) => res.render('index', { user: req.session.user }));
app.get('/login', (req, res) => res.render('login'));
app.post('/register', registerUser);
app.post('/login', loginUser);
app.post('/logout', logoutUser);

app.get('/posts', getAllPosts);
app.get('/posts/:id', getPostById);
// auth middleware
app.get('/post', restrict, (req, res) => res.render('create'));
app.post('/posts', restrict, createPost);
app.put('/posts/:id', restrict, updatePost);
app.delete('/posts/:id', restrict, deletePost);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
