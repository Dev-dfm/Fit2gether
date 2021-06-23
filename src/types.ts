import { ObjectId } from 'bson';

export type Group = {
  _id?: ObjectId;
  groupName: string;
  sport: string;
  date: string;
  time: string;
  location: string;
  limit: number;
  equipment: string;
  description: string;
};
