import { Controller } from 'lux-framework';
import OAuth2Server from 'app/middleware/oauth2';


class UsersController extends Controller {
  beforeAction = [
    OAuth2Server.authenticatedRoute
  ];

  params = [
    'firstName',
    'lastName',
    'userName',
    'password',
    'defaultSort',
    'defaultFilter',
    'role',
    'permissions',
    'jobs'
  ];
}

export default UsersController;
