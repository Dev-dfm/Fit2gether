import { Collection } from 'mongodb';
import { User } from '../types';
import { getCollection } from './database';

export const getUsersCollection = (): Collection<User> => {
  return getCollection<User>('users');
};

export const readUsers = async (): Promise<User[]> => {
  return await getUsersCollection().find().sort({ userName: 1 }).toArray();
};

export const readUser = async (userName: string): Promise<User | undefined> => {
  const user = await getUsersCollection().findOne({ userName });
  if (!user) {
    throw new Error('Can`t find user');
  }
  return user;
};

export const saveUser = async (user: User): Promise<void> => {
  await getUsersCollection().insertOne({ ...user });
};

export const deleteUser = async (userName: string): Promise<boolean> => {
  const result = await getUsersCollection().deleteOne({ userName });
  if (result.deletedCount === undefined) {
    return false;
  }
  return result.deletedCount > 0;
};
