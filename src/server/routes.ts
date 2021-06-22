import express from 'express';
import { readGroups, readGroup, saveGroup, deleteGroup } from './groups';

const router = express.Router();

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

export default router;
