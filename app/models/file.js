import { Model } from 'lux-framework';

class File extends Model {
      static belongsTo = {
        job: {
          inverse: 'files'
        }
  };
}

export default File;
