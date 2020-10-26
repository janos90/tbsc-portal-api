import { Controller } from 'lux-framework';

class OauthAccessTokensController extends Controller {
  params = [
    'accessToken',
    'expires',
    'userId',
    'oauthClientId'
  ];
}

export default OauthAccessTokensController;
