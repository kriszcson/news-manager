import mongoose from 'mongoose';

export class User {
  name: string;
  email: string;
  imageUrl: string;
}

export const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    imageUrl: String,
  },
  { timestamps: true },
);
