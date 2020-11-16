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
    'parent',
    'children',
    'receiver',
    'suppliers',
    'image'
  ];
}

export default EntitiesController;
