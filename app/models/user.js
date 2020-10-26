import { Model } from 'lux-framework';

class User extends Model {
      static hasMany = {
        permissions: {
          inverse: 'user'
        },

        jobs: {
          inverse: 'createdBy'
        },
        accessTokens: {
          model: 'oauthAccessToken',
          inverse: 'user'
        },
        refreshTokens: {
          model: 'oauthRefreshToken',
          inverse: 'user'
        }

  };
}

export default User;
