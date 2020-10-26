import { Serializer } from 'lux-framework';

class OauthRefreshTokensSerializer extends Serializer {
  attributes = [
    'refreshToken',
    'expires',
    'userId',
    'oauthClientId'
  ];

  hasOne = [
    'user',
    'oauthClient'
  ];
}

export default OauthRefreshTokensSerializer;
