import { Controller } from 'lux-framework';

class EntitiesController extends Controller {
  params = [
    'name',
    'email',
    'phone',
    'address',
    'forms',
    'permissions',
    'jobs',
    'children',
    'parent'
  ];
}

export default EntitiesController;
