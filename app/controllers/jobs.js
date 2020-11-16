import { Controller } from 'lux-framework';

class JobsController extends Controller {
  params = [
    'jobNumber',
    'status',
    'title',
    'owner',
    'suburb',
    'city',
    'address',
    'bedrooms',
    'description',
    'category',
    'createdBy',
    'entity',
    'form',
    'files',
    'image'
  ];
}

export default JobsController;
