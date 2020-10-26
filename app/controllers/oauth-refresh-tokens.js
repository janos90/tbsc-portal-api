import { Controller } from 'lux-framework';

class OauthRefreshTokensController extends Controller {
  params = [
    'refreshToken',
    'expires',
    'userId',
    'oauthClientId'
  ];
}

export default OauthRefreshTokensController;
