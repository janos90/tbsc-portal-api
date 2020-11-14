import { Model } from 'lux-framework';

class Form extends Model {
      static hasMany = {
        sections: {
          inverse: 'form'
        },

        jobs: {
          inverse: 'form'
        },
        suppliers: {
          inverse: null
        }

      };

      static belongsTo = {
        entity: {
          inverse: 'forms'
        }
  };
}

export default Form;
