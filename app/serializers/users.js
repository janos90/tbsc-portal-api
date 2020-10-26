import { Serializer } from 'lux-framework';

class UsersSerializer extends Serializer {
  attributes = [
    'firstName',
    'lastName',
    'userName',
    'password',
    'defaultSort',
    'defaultFilter',
    'role'
  ];

  hasMany = [
    'permissions',
    'jobs',
    'accessTokens',
    'refreshTokens'
  ];
}

export default UsersSerializer;
