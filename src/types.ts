import { ObjectId } from 'bson';

export type Group = {
  _id?: ObjectId;
  groupname: string;
  sport: string;
  date: string;
  time: string;
  location: string;
  limit: number;
  equipment: string;
  description: string;
};
