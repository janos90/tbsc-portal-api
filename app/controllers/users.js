import { Controller } from 'lux-framework';


class UsersController extends Controller {

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
