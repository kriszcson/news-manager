import { Connection } from 'mongoose';
import { userSchema } from 'src/users/user';

export const userProviders = [
  {
    provide: 'USER_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('User', userSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
