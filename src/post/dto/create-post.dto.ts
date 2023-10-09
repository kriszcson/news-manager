import * as mongoose from 'mongoose';

export class CreatePostDto {
  address: string;
  imageUrl?: string;
  text: string;
  author: string;
}

export const PostSchema = new mongoose.Schema(
  {
    address: String,
    imageUrl: String,
    text: String,
    author: String,
  },
  { timestamps: true },
);
