import { Model } from 'lux-framework';

class Entity extends Model {
      static hasMany = {
        forms: {
          inverse: 'entity'
        },

        permissions: {
          inverse: 'entity'
        },

        jobs: {
          inverse: 'entity'
        },

        children: {
          inverse: 'parent',
          model: 'entity'
        },
        listings: {
          inverse: 'suppliers',
          model: 'form'
        }
      };

      static belongsTo = {
        parent: {
          inverse: 'children',
          model: 'entity'
        }
  };
}

export default Entity;
