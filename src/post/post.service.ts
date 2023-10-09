import { Inject, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Model } from 'mongoose';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @Inject('POST_MODEL')
    private postModel: Model<Post>,
  ) {}
  create(createPostDto: CreatePostDto) {
    return this.postModel.create(createPostDto);
  }

  findAll() {
    return this.postModel.find();
  }

  async findOne(_id: string) {
    let post: Post;
    try {
      post = await this.postModel.findById(_id);
    } catch (e) {
      return { message: 'no post found' };
    }
    return post;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.postModel.findByIdAndUpdate(id, updatePostDto);
  }

  async remove(_id: string) {
    return this.postModel.findByIdAndRemove(_id);
  }
}
