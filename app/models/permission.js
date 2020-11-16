import { Model } from 'lux-framework';

class Permission extends Model {
      static belongsTo = {
        entity: {
          inverse: 'permissions'
        },

        user: {
          inverse: 'permissions'
        }
  };
}

export default Permission;
