import express from 'express';
import { readGroups, readGroup, saveGroup, deleteGroup } from './groups';
import { deleteUser, readUser, readUsers, saveUser } from './users';

const router = express.Router();

// Groups
router.get('/groups', async (req, res) => {
  const { filter, sort_by } = req.query;
  if (typeof filter !== 'string' || typeof sort_by !== 'string') {
    res.status(400).send('Query is malformed');
    return;
  }
  const groups = await readGroups(filter, sort_by);
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
  const users = await readUser({ userName: req.params.userName });
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

// User login
router.post('/users/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await readUser({ email, password });
    if (!user) {
      res.status(404).send('Email or password incorrect');
      return;
    }

    res.setHeader(
      'Set-Cookie',
      `userId=${user._id};path=/;Max-Age=${365 * 24 * 60 * 60}`
    );

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

export default router;
