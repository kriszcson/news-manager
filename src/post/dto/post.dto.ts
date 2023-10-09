import { Document } from 'mongoose';

export interface Post extends Document {
  address: string;
  imageUrl?: string;
  text: string;
  author: string;
}
