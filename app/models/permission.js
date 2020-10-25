import { Model } from 'lux-framework';

class Permission extends Model {
      static belongsTo = {
        entity: {
          inverse: 'permission'
        },

        user: {
          inverse: 'permission'
        }
  };
}

export default Permission;
