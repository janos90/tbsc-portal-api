import { Controller } from 'lux-framework';

class PermissionsController extends Controller {
  params = [
    'entity',
    'level',
    'user'
  ];
}

export default PermissionsController;
