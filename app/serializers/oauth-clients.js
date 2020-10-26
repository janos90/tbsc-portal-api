import { Serializer } from 'lux-framework';

class OauthClientsSerializer extends Serializer {
  attributes = [
    'clientId',
    'clientSecret',
    'redirectUri',
    'grants'
  ];

  hasMany = [
    'accessTokens',
    'refreshTokens'
  ];
}

export default OauthClientsSerializer;
