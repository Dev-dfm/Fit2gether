import { ObjectId } from 'bson';

export type Group = {
  _id?: ObjectId;
  groupname: string;
  sport: string;
  date: string;
  time: string;
  location: string;
  limit: number;
  equipment?: string;
  description?: string;
};

export type User = {
  _id?: ObjectId;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type GroupCard = {
  id?: ObjectId;
  groupname: string;
  location: string;
  month: string;
  date: string;
  time: string;
  distance: number;
};
