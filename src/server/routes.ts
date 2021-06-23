import express from 'express';
import { readGroups, readGroup, saveGroup, deleteGroup } from './groups';
import { deleteUser, readUser, readUsers, saveUser } from './users';

const router = express.Router();

// Groups
router.get('/groups', async (_req, res) => {
  const groups = await readGroups();
  res.json(groups);
});

router.get('/groups/:groupname', async (req, res) => {
  const groups = await readGroup(req.params.groupname);
  res.json(groups);
});

router.post('/groups', async (req, res) => {
  await saveGroup(req.body);
  res.status(200).json(req.body);
});

router.delete('/groups/:groupname', async (req, res) => {
  await deleteGroup(req.params.groupname);
  res.send('Group has been deleted');
});

// Users
router.get('/users', async (_req, res) => {
  const users = await readUsers();
  res.json(users);
});

router.get('/users/:userName', async (req, res) => {
  const users = await readUser(req.params.userName);
  res.json(users);
});

router.post('/users', async (req, res) => {
  await saveUser(req.body);
  res.status(200).json(req.body);
});

router.delete('/users/:userName', async (req, res) => {
  await deleteUser(req.params.userName);
  res.send('User has been deleted');
});

export default router;
