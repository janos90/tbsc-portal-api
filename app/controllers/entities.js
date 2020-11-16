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
    'parent',
    'suppliers',
    'receivers',
    'image'
  ];
}

export default EntitiesController;
