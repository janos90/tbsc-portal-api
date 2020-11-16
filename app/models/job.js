import { Model } from 'lux-framework';

class Job extends Model {
      static hasMany = {
        files: {
          inverse: 'job'
        }
      };

      static belongsTo = {
        createdBy: {
          inverse: 'jobs',
          model: 'user'
        },

        entity: {
          inverse: 'jobs'
        },

        form: {
          inverse: 'jobs'
        }
        
  };
}

export default Job;
