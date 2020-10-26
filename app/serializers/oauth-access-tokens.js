import { Serializer } from 'lux-framework';

class OauthAccessTokensSerializer extends Serializer {
  attributes = [
    'accessToken',
    'expires',
    'userId',
    'oauthClientId'
  ];

  hasOne = [
    'user',
    'oauthClient'
  ];
}

export default OauthAccessTokensSerializer;
