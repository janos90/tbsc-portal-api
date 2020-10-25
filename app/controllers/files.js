import { Controller } from 'lux-framework';

class FilesController extends Controller {
  params = [
    'job',
    'location',
    'fileType'
  ];
}

export default FilesController;
