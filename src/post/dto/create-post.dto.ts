import * as mongoose from 'mongoose';

export class CreatePostDto {
  text: string;
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
