import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import path from 'path';
import { connectDB } from './utils/database';
import { readGroups, readGroup, saveGroup, deleteGroup } from './utils/groups';

if (process.env.MONGODB_URL === undefined) {
  throw new Error('Missing env MONGODB_URL');
}

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.json());

app.get('/api/groups', async (_req, res) => {
  const groups = await readGroups();
  res.json(groups);
});

app.get('/api/groups/:groupname', async (req, res) => {
  const groups = await readGroup(req.params.groupname);
  res.json(groups);
});

app.post('/api/groups', async (req, res) => {
  await saveGroup(req.body);
  res.send('Group saved in database');
});

app.delete('/api/groups/:groupname', async (req, res) => {
  await deleteGroup(req.params.groupname);
  res.send('Group has been deleted');
});

// Serve storybook production bundle
app.use('/storybook', express.static('dist/storybook'));

// Serve app production bundle
app.use(express.static('dist/app'));

// Handle client routing, return all requests to the app
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

connectDB(process.env.MONGODB_URL).then(() => {
  console.log('Database connected');
  app.listen(PORT, () => {
    console.log(`Fit2gether is listening at http://localhost:${PORT}`);
  });
});
