import { Controller } from 'lux-framework';

class OauthClientsController extends Controller {
  params = [
    'clientId',
    'clientSecret',
    'redirectUri',
    'grants'
  ];
}

export default OauthClientsController;
