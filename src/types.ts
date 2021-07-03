import { ObjectId } from 'bson';

export type Group = {
  _id?: ObjectId;
  newDate: Date;
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
  _id?: string;
  groupname: string;
  location: string;
  month: string;
  date: string;
  time: string;
  distance: number;
  onClick: () => void;
};

export type GroupDetails = {
  groupname: string;
  month: string;
  date: string;
  location: string;
  time: string;
  distance: number;
  description: string;
  equipment: string;
};
