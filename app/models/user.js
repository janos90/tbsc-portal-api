import { Model } from 'lux-framework';

class User extends Model {
      static hasMany = {
        permissions: {
          inverse: 'user'
        },

        jobs: {
          inverse: 'createdBy'
        }

  };
}

export default User;
