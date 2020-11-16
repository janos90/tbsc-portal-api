import { Controller } from 'lux-framework';
import Job from '../models/job';

class JobsController extends Controller {
  beforeAction = [
    function logHeaders(request) {
      console.log(request.headers);
    }
  ];

  index(request) {
    return Job.where(request.params.filter);
  }

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
