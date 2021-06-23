import { Collection } from 'mongodb';
import type { Group } from '../types';
import { getCollection } from './database';

export const getGroupsCollection = (): Collection<Group> => {
  return getCollection<Group>('groups');
};

export const readGroups = async (): Promise<Group[]> => {
  return await getGroupsCollection().find().sort({ groupname: 1 }).toArray();
};

export const readGroup = async (groupname: string): Promise<Group> => {
  const group = await getGroupsCollection().findOne({ groupname });
  if (!group) {
    throw new Error('Can`t find group');
  }
  return group;
};

export const saveGroup = async (group: Group): Promise<void> => {
  await getGroupsCollection().insertOne({ ...group });
};

export const deleteGroup = async (groupname: string): Promise<boolean> => {
  const result = await getGroupsCollection().deleteOne({ groupname });
  if (result.deletedCount === undefined) {
    return false;
  }
  return result.deletedCount > 0;
};
