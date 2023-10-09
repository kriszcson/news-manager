import { Connection } from 'mongoose';
import { PostSchema } from 'src/post/dto/create-post.dto';

export const postProviders = [
  {
    provide: 'POST_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Post', PostSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
